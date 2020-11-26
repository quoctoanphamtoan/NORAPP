// const { result } = require("lodash");

function removeFriend() {
  $(".user-remove-contact").unbind("click").on("click", function () {
    let tagetId = $(this).data("uid");
    let userName = $(this).parent().find("div.user-name p").text();

    // console.log(tagetId)
    // $("#contacts").find(`ul li[data-uid=${tagetId}]`).remove();
    // decreaseNumberNotifyContact("count-contacts");

    Swal.fire({
      title: `Bạn có muốn xóa thằng ${userName} khÔng?`,
      text: "Bạn có muốn xóa thằng này không?",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#2ECC71",
      confirmButtonText: "Xác nhận",
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
            decreaseNumberNotifyContact("count-contacts");
            socket.emit("remove-friend", { contactId: tagetId });
          }
        }


      });
    });


  });
}
socket.on("req-remove-received", function (user) {
  $("#contacts").find(`ul li[data-uid=${user.id}]`).remove();
  decreaseNumberNotifyContact("count-contacts");
});



$(document).ready(function () {
  removeFriend();

});