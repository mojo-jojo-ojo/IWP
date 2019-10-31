
function showNav() {
  var x=document.getElementsByClassName("false");
  var y=document.getElementsByClassName("true");
  for (var i=0;i<x.length;i+=1)
    x[i].style.display = "block";
  for (var j=0;j<y.length;j+=1)
    y[j].style.display = "none";
}

function hideNav() {
  var x = document.getElementsByClassName("false");
  var y =document.getElementsByClassName("true");
  for (var i=0;i<y.length;i+=1)
    y[i].style.display = "block";
  for (var j=0;j<x.length;j+=1)
    x[j].style.display = "none";
}
