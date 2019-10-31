loadXMLDoc1();
function loadXMLDoc1() {
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    document.getElementById("PROFILE").innerHTML=this.responseText;
  }
};
xhttp.open("GET", "./html/profile.html", true);
xhttp.send();
}
