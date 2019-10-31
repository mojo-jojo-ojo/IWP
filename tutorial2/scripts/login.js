
firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    // User is signed in.
    validate();
    document.getElementById("user_div").style.display="block";
    document.getElementById("login_div").style.display="none";
    validate();
  } else {
    // No user is signed in.
    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";

  }
});
function login() {
  firebase.auth().signInWithEmailAndPassword(uid, pass).catch(function (error) {
    // Handle Errors here.
    validate();
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : "+errorMessage);
    
    // ...
  });
}

var attempt = 3;

function validate() {
  
  var username = document.getElementById("uid").value;
  var password = document.getElementById("pass").value;
  window.alert("Welcome "+username+" !");
  if (username=="admin" && password=="pass") {
    if(validateCaptcha()==true)
    {
      window.alert("Working!");
       alert ("Login successfully");
      var link = document.createElement('a');
      link.target="_parent";
      link.href = "./main2.php";
      link.click()
     
      return true;
    }
  }

  else {
    attempt --;
    alert("You have left "+attempt+" attempt;");

    if( attempt == 0){
      document.getElementById("uid").disabled = true;
      document.getElementById("pass").disabled = true;
      document.getElementById("submit").disabled = true;
      return false;
    }
  }

}



function generateCaptcha() {
  var alpha = new Array('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','1','2','3','4','5','6','7','8','9','');
  var i;
  for (i=0;i<4;i++) {
    var a = alpha[Math.floor(Math.random() * alpha.length)];
    var b = alpha[Math.floor(Math.random() * alpha.length)];
    var c = alpha[Math.floor(Math.random() * alpha.length)];
    var d = alpha[Math.floor(Math.random() * alpha.length)];
  }
  var code = a + '' + b + '' + '' + c + '' + d;
  document.getElementById("mainCaptcha").value = code
}

function validateCaptcha() {
  var string1 = removeSpaces(document.getElementById('mainCaptcha').value);
  var string2 = removeSpaces(document.getElementById('captcha').value);
  if (string1==string2) {
    return true;
  }
  else {
    return false;
  }
}

function removeSpaces(string) {
  return string.split(' ').join('');
}
function setCookie(cname,cvalue,exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";

}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function saveCookie()
{

  user=document.getElementById("uid").value;
  pass=document.getElementById("pass").value;
  console.log(user);
  console.log(pass);

  setCookie("username", user, 30);
  setCookie("password",pass,30);
}

function checkCookie()
{

   var luser=document.getElementById("username").value;
   var lpass=document.getElementById("password").value;
   console.log(luser);
   console.log(lpass);
   if(luser==""||lpass=="")
   {
     alert("Please Enter all fields")
     return 0;
   }
   else
   {
     var cookieuser=getCookie("username");
     var cookiepass=getCookie("password");
     if(cookieuser==luser && cookiepass==lpass)
       return true;
     else
        return false;
    }
}
