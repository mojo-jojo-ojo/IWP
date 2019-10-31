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
  //var jsonStr = '{"User":[{"name":"","email":"","password":""}]}';
  var jsonStr=getCookie("cookieuser");
  var obj = JSON.parse(jsonStr);
  obj['User'].push(
  {
    
    "username":document.getElementById("uid").value,
    "password":document.getElementById("pass").value,
   
  });
  jsonStr = JSON.stringify(obj);
  console.log(jsonStr);
  setCookie("cookieuser", jsonStr, 30);
  // window.location="login.php";
  alert("Id is created ");
  //window.location="login.php";
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
