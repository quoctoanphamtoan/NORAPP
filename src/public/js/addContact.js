
function increaseNumberNotifyContact(className) {
  let currenValue = +$(`.${className}`).find("em").text();
  currenValue += 1;
  if (currenValue === 0) {
    $(`.${className}`).html("0");

  } else {
    $(`.${className}`).html(`<em>${currenValue}</em>`)
  }
}
function addContact() {
  $(".user-add-new-contact").bind("click", function () {
    let tagetId = $(this).data("uid");
    // console.log(tagetId)
    $.post("/contact/add-new", { uid: tagetId }, function (data) {
      if (data.success == true) {
        $("#find-user").find(`div.user-add-new-contact[data-uid=${tagetId}]`).hide();
        $("#find-user").find(`div.user-remove-request-contact[data-uid=${tagetId}]`).css("display", "inline-block");
        //dong kb hien huy kb
        increaseNumberNotifyContact("count-request-contact-sent");
      }
    })
  });
}