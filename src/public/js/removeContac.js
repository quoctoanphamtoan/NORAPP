// const { result } = require("lodash");

function removeFriend() {
  $(".user-remove-contact").unbind("click").on("click", function () {
    let tagetId = $(this).data("uid");
    let userName = $(this).parent().find("div.user-name p").text();
    // console.log(tagetId)

    Swal.fire({
      title: `Bạn có chắc chắn muốn xóa ${userName} này`,
      text: "Bạn có thể hoàn tác",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#2ECC71",
      cancelButtonColor: "#ff7675",
      cancelButtonText: "Xác nhận",
      cancelButtonText: "Hũy"
    }).then((result) => {
      if (!result.value) {
        return false;
      }
      $.ajax({
        url: "/contact/remove-friend",
        type: "delete",
        data: { uid: tagetId },
        success: function (data) {
          if (data.success) {
            $("#contacts").find(`ul li[data-uid=${tagetId}]`).remove();

            //count-contacts
            decreaseNumberNotifyContact("count-contacts");



            socket.emit("remove-friend", { contactId: tagetId });
          }
        }


      });

    })




  });
}
socket.on("req-remove-friend", function (user) {
  $("#contacts").find(`ul li[data-uid=${user.id}]`).remove();

  //count-contacts
  decreaseNumberNotifyContact("count-contacts");
});



$(document).ready(function () {
  removeFriend();

});