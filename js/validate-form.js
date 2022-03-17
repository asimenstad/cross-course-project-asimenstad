const email = document.querySelector("#email");
const validEmail = document.querySelector("#valid-email");
const invalidEmail = document.querySelector("#invalid-email");
const errorEmail = document.querySelector("#error-email");

const phoneNumber = document.querySelector("#phone-number");
const validPhone = document.querySelector("#valid-phone");
const invalidPhone = document.querySelector("#invalid-phone");
const errorPhone = document.querySelector("#error-phone");

const firstName = document.querySelector("#first-name");
const validFirstName = document.querySelector("#valid-firstname");
const invalidFirstName = document.querySelector("#invalid-firstname");
const errorFirstName = document.querySelector("#error-firstname");

const lastName = document.querySelector("#last-name");
const validLastName = document.querySelector("#valid-lastname");
const invalidLastName = document.querySelector("#invalid-lastname");
const errorLastName = document.querySelector("#error-lastname");

const address = document.querySelector("#address");
const validAddress = document.querySelector("#valid-address");
const invalidAddress = document.querySelector("#invalid-address");
const errorAddress = document.querySelector("#error-address");

email.addEventListener("blur", validateEmail);

function validateEmail(event) {
  event.preventDefault();
  if (checkEmail(email.value)) {
    validEmail.style.display = "block";
    invalidEmail.style.display = "none";
    errorEmail.style.display = "none";
  } else {
    validEmail.style.display = "none";
    invalidEmail.style.display = "block";
    errorEmail.style.display = "block";
  }
}

phoneNumber.addEventListener("blur", validatePhone);

function validatePhone(event) {
  event.preventDefault();
  if (checkLength(phoneNumber.value, 8)) {
    validPhone.style.display = "block";
    invalidPhone.style.display = "none";
    errorPhone.style.display = "none";
  } else {
    validPhone.style.display = "none";
    invalidPhone.style.display = "block";
    errorPhone.style.display = "block";
  }
}

firstName.addEventListener("blur", validateFirstName);

function validateFirstName(event) {
  event.preventDefault();
  if (checkLength(firstName.value, 1)) {
    validFirstName.style.display = "block";
    invalidFirstName.style.display = "none";
    errorFirstName.style.display = "none";
  } else {
    validFirstName.style.display = "none";
    invalidFirstName.style.display = "block";
    errorFirstName.style.display = "block";
  }
}

lastName.addEventListener("blur", validateLastName);

function validateLastName(event) {
  event.preventDefault();
  if (checkLength(lastName.value, 1)) {
    validLastName.style.display = "block";
    invalidLastName.style.display = "none";
    errorLastName.style.display = "none";
  } else {
    validLastName.style.display = "none";
    invalidLastName.style.display = "block";
    errorLastName.style.display = "block";
  }
}

address.addEventListener("blur", validateAddress);

function validateAddress(event) {
  event.preventDefault();
  if (checkLength(address.value, 10)) {
    validAddress.style.display = "block";
    invalidAddress.style.display = "none";
    errorAddress.style.display = "none";
  } else {
    validAddress.style.display = "none";
    invalidAddress.style.display = "block";
    errorAddress.style.display = "block";
  }
}

function checkLength(value, length) {
  if (value.trim().length >= length) {
    return true;
  } else {
    return false;
  }
}

function checkEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatch = regEx.test(email);
  return patternMatch;
}
