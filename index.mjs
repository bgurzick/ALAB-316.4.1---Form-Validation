const form = document.getElementById("form");
const username = form.elements["username"];
const email = form.elements["email"];
const password = form.elements["password"];
const tandC = form.elements["tandC"];
const repeatPassword = form.elements["repeatPassword"];


function validate(evt) {
    const usernameVal = validateUsername();
    if (usernameVal === false) {
      evt.returnValue = false;
      return false;
    }

    const emailVal = validateEmail();
    if (emailVal === false) {
      evt.returnValue = false;
      return false;
    }

    const passwordVal = validatePassword();
    if (passwordVal === false) {
      evt.returnValue = false;
      return false;
    }

    const tandCVal = validateTandC();
    if (tandCVal === false) {
      evt.returnValue = false;
      return false;
    }
  
    const repeatPasswordVal = validateRepeatPassword();
    if (repeatPasswordVal === false) {
      evt.returnValue = false;
      return false;
    }
  
  
  //what to do here with the password section?
    alert(`username: ${usernameVal}
  Email: ${emailVal}
  Country: ${tandCVal}
  Zip Code: ${zipVal}
  Password: ...that's a secret.`);
  
    return true;
  }


  // Simple email validation.
// We added a check to make sure the name exists!
// Note that this could also be solved via adding
// the "required" attribute to the HTML, but the
// focus of this activity is DOM events.
function validateEmail() {
    let emailVal = email.value;
  
    if (emailVal === "") {
      alert("Umm... E-MAIL!");
      email.focus();
      return false;
    }
  
    const atpos = emailVal.indexOf("@");
    const dotpos = emailVal.lastIndexOf(".");
  
    if (atpos < 1) {
      alert(
        "Your email must include an @ symbol which must not be at the beginning of the email."
      );
      email.focus();
      return false;
    }
  
    if (dotpos - atpos < 2) {
      alert(
        "Invalid structure: @.\nYou must include a domain name after the @ symbol."
      );
      email.focus();
      return false;
    }
  
    return emailVal;
  }
  
  // Username Validation
  function validateUsername() {
    if (username.value === "") {
      alert("Please provide a username!");
      username.focus();
      return false;
    }
    return username.value;
  }
  
  // Password Validation
  function validatePassword() {
    if (password.value === "") {
      alert("Please provide a password.");
      password.focus();
      return false;
    }
    return password.value;
  }
  
  // Terms & Conditions Validation
  function validateTandC() {
    if (tandC.value === "") {
      alert("Please accept the Terms & Conditions.");
      tandC.focus();
      return false;
    }
    return tandC.value;
  }
  
  // Repeat Password Validation
  function validateRepeatPassword() {
    if (repeatPassword.value === "") {
      alert("PASSWORDS DO NOT MATCH! OH MY GOD.");
      repeatPassword.focus();
      return false;
    }
  ////make this where the passwords have to match
    if (zip.value.length !== 5 || isNaN(Number(zip.value))) {
      alert("Zip codes must be in the format #####.");
      zip.focus();
      return false;
    }
  
    return zip.value;
  }