
function removeResquesContact() {
  $(".user-remove-request-contact").bind("click", function () {
    let tagetId = $(this).data("uid");
    // console.log(tagetId)
    $.ajax({
      url: "/contact/remove",
      type: "delete",
      data: { uid: tagetId },
      success: function (data) {
        $("#find-user").find(`div.user-add-new-contact[data-uid=${tagetId}]`).css("display", "inline-block");
        $("#find-user").find(`div.user-remove-request-contact[data-uid=${tagetId}]`).hide();;
        decreaseNumberNotifyContact("count-request-contact-sent")
        socket.emit("remove-request-contact", { contactId: tagetId });
      }


    });
  });
}
socket.on("req-remove-request-contact", function (user) {
  $(".noti_content").find(`span[data-uid=${user.id}]`).remove();


  decreaseNumberNotifyContact("count-request-contact-received");
  decreaseNumberNoti("noti_contact_counter");

  decreaseNumberNoti("noti_counter");
});
