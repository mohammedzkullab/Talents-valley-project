const emailCheck = /[\w\.]+@[\w\.]+\.[\w+]{2,4}/gi;
const passCheck = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/g;
const nameCheck = /^[a-z ,.'-]+$/i;
export function isRequired(value) {
  return value != null && value.trim().length > 0;
}
export function emailValidate(value) {
  return emailCheck.test(value);
}
export function passwordValidate(value) {
  return passCheck.test(value);
}

function isSame(value1, value2) {
  return value1 === value2;
}
