const formOutput = document.querySelector("#contactForm");
const formError = document.querySelector(".form-error");

formOutput.addEventListener("submit", formValidator);
function formValidator(event) {
  event.preventDefault();

  const firstName = document.querySelector("#firstName");
  const firstNameError = document.querySelector("#firstNameError");

  const firstNameValue = firstName.value;
  if (textValidator(firstNameValue) === true) {
    firstNameError.style.display = "none";
  } else {
    firstNameError.style.display = "block";
  }

  const lastName = document.querySelector("#lastName");
  const lastNameError = document.querySelector("#lastNameError");

  const lastNameValue = lastName.value;
  if (textValidator(lastNameValue) === true) {
    lastNameError.style.display = "none";
  } else {
    lastNameError.style.display = "block";
  }

  const email = document.querySelector("#email");
  const emailError = document.querySelector("#emailError");

  const mailValue = email.value;
  if (textValidator(mailValue) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  const emailValidError = document.querySelector("#invalidEmailError");

  if (mailValidator(mailValue) === true) {
    emailValidError.style.display = "none";
  } else {
    emailValidError.style.display = "block";
  }

  const message = document.querySelector("#message");
  const messageError = document.querySelector("#messageError");

  const messageValue = message.value;
  if (messageValidator(messageValue) === true) {
    messageError.style.display = "none";
  } else {
    messageError.style.display = "block";
  }
}

function textValidator(string) {
  const inputValue = string.trim();
  if (inputValue.length > 0) {
    return true;
  } else {
    return false;
  }
}

function mailValidator(mail) {
  const regEx = /\S+@\S+\.\S+/;
  return regEx.test(mail);
}

function messageValidator(message) {
  const trimmedMessage = message.trim();
  if (trimmedMessage.length >= 10) {
    return true;
  } else {
    return false;
  }
}
