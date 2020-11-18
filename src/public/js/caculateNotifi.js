function increaseNumberNoti(className) {
  let currenValue = +$(`.${className}`).text();
  currenValue += 1;
  if (currenValue === 0) {
    $(`.${className}`).css("display", "none").html("");

  } else {
    $(`.${className}`).css("display", "block").html(currenValue)
  }
}
function decreaseNumberNoti(className) {
  let currenValue = +$(`.${className}`).text();
  currenValue -= 1;
  if (currenValue === 0) {
    $(`.${className}`).css("display", "none").html("");

  } else {
    $(`.${className}`).css("display", "block").html(currenValue)
  }
}