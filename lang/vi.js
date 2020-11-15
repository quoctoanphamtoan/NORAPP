export const transValidation = {
  email_incorrect: "Email phải có dạng .......@gmal.com",
  gender_incorrect: "Ũa tại sao lại bị sai được ! hack à ~~",
  password_incorrect: "ít nhất 8 kí tự, thích nhập gì cũng được hết ",
  password_confirmation_incorrect: "nhập lại mật khẫu cho cẩn thận .",

};
export const transErrors = {
  acount_in_use: "Email đã được xử dụng.",
  acount_removed: "Tài khoản đã bị khóa",
  acount_not_active: "Tài khoản chưa được active "

}
export const transSuccess = {
  userCreated: (userEmail) => {
    return `Tài khoản <strong>${userEmail}</strong> đã được tạo, vui lòng kiểm tra email`;
  }
}
