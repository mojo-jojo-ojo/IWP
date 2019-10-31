function formValidation() {
// Make quick references to our fields.
  var firstname = document.getElementById('firstname');
  var username = document.getElementById('uid');
  var password = document.getElementById('pass');
  var cpassword = document.getElementById('cpass');
  var age = document.getElementById('age');

  // To check empty form fields.
  if (firstname.value.length == 0) {
    document.getElementById('head').innerText = "* All fields are mandatory *"; // This segment displays the validation rule for all fields
    firstname.focus();
    return false;
  }
  // Check each input in the order that it appears in the form.
  if (inputAlphabet(firstname, "* For your name please use alphabets only *")) {
    if (lengthDefine(username, 6, 8)) {
      if (passValidation(password,cpassword, "* Passwords do not match *")) {
        if (ageValidation(age, "* Age less than 18")) {
          $.getScript("../scripts/cookies.js",function(){
            saveCookie();
          });
          alert ("SignUp Successful");
          window.location = "login.php";
          return true;
        }
      }
    }
  }
  return false;
}

// Function that checks whether input text is an alphabetic character or not.
function inputAlphabet(inputtext, alertMsg) {
  var alphaExp = /^[a-zA-Z]+$/;
  if (inputtext.value.match(alphaExp)) {
    return true;
  }
  else {
    document.getElementById('p1').innerText = alertMsg; // This segment displays the validation rule for name.
    //alert(alertMsg);
    inputtext.focus();
    return false;
  }
}

// Function that checks whether the input characters are restricted according to defined by user.
function lengthDefine(inputtext, min, max) {
  var uInput = inputtext.value;
  if (uInput.length >= min && uInput.length <= max) {
    return true;
  }
  else {
    document.getElementById('p2').innerText = "* Please enter between " + min + " and " + max + " characters *"; // This segment displays the validation rule for username
    inputtext.focus();
    return false;
  }
}

// Function that checks whether a option is selected from the selector and if it's not it displays an alert message.
function ageValidation(inputtext, alertMsg) {
  if (inputtext.value <18) {
    document.getElementById('p4').innerText = alertMsg; //this segment displays the validation rule for selection.
    inputtext.focus();
    return false;
  }
  else {
    return true;
  }
}
// Function that checks whether an user entered valid email address or not and displays alert message on wrong email address format.
function passValidation(inputtext1, inputtext2, alertMsg) {
  if (inputtext1.value.match(inputtext2.value)) {
    return true;
  }
  else {
    document.getElementById('p3').innerText = alertMsg; // This segment displays the validation rule for email.
    inputtext1.focus();
    return false;
  }
}
