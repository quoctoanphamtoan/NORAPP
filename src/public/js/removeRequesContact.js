
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
      }

    });
  });
}