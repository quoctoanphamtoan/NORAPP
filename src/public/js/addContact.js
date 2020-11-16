function addContact() {
  $(".user-add-new-contact").bind("click", function () {
    let tagetId = $(this).data("uid");
    console.log(tagetId)
    $.port("/contact/add-new", { uid: tagetId }, function (data) {
      console.log(data)
    })
  });
}