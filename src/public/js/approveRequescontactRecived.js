
function approveResquesContactRecieved() {
  $(".user-approve-request-contact-received").unbind("click").on("click", function () {
    let tagetId = $(this).data("uid");

    // console.log(tagetId)
    $.ajax({
      url: "/contact/approve-received",
      type: "put",
      data: { uid: tagetId },
      success: function (data) {
        if (data.success) {
          let userInfo = $("#request-contact-received").find(`ul li[data-uid= ${tagetId}]`);
          $(userInfo).find("div.user-approve-request-contact-received").remove();
          $(userInfo).find("div.user-remove-request-contact-received").remove();
          $(userInfo).find("div.contactPanel")
            .append(`
                                            <div class="user-talk" data-uid="${tagetId}">
                                                  Trò chuyện
                                              </div>
                                              <div class="user-remove-contact action-danger" data-uid="${tagetId}">
                                                  Xóa liên hệ
                                              </div>
          
          `);
          console.log(tagetId)
          let userInfoHTML = userInfo.get(0).outerHTML;
          $("#contacts").find("ul").prepend(userInfoHTML);
          $(userInfo).remove();
          increaseNumberNotifyContact("count-contactsx");
          decreaseNumberNotifyContact("count-request-contact-received");
          decreaseNumberNoti("noti_contact_counter", 1);


          socket.emit("approve-request-contact-received", { contactId: tagetId });
        }
      }


    });
  });
}
socket.on("req-approve-request-contact-received", function (user) {
  let notif = `<div class="notif-readed-false" data-uid="${user.id}">
  <img class="avatar-small" src="/images/users/${user.avatar}"
      alt="">
  <strong>${user.userName}</strong> Đã chấp nhận lời mời kết bạn của bạn!
</div>`;
  $(".noti_content").prepend(notif);
  $("ul.list-notifycations").prepend(`<li>${notif}</li>`);
  decreaseNumberNoti("noti_contact_counter", 1);
  increaseNumberNoti("noti_counter", 1);

  increaseNumberNotifyContact("count-contactsx");
  decreaseNumberNotifyContact("count-request-contact-sent");
  $("#request-contact-sent").find(`ul li[data-uid =${user.id}]`).remove();

  let userInfoHTML = `
  <li class="_contactList" data-uid="${user.id}">
  <div class="contactPanel">
      <div class="user-avatar">
          <img src="/images/users/${user.avatar}" alt="">
      </div>
      <div class="user-name">
          <p>
          ${user.userName}
          </p>
      </div>
      <br>
      <div class="user-address">
          <span>&nbsp ${user.address}</span>
      </div>
      <div class="user-talk" data-uid="${user.id}">
          Trò chuyện
      </div>
      <div class="user-remove-contact action-danger" data-uid="${user.id}">
          Xóa liên hệ
      </div>
  </div>
</li>
  `;

  $("#contacts").find("ul").prepend(userInfoHTML);
});



$(document).ready(function () {
  approveResquesContactRecieved();

});