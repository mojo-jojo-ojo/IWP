window.onload=function()
{
  var canvas=document.getElementById("Donkey");
  var ctx=canvas.getContext("2d");

  //for rectangle
  ctx.rect(100,200,200,100); //left is relational to right side and top side is relational to bottom
  //context.lineWidth=5;
  //context.strokeStyle="orange";

  //for lines
  ctx.moveTo(150,300);
  ctx.lineTo(120,350); //end point
  ctx.stroke(); //line1

  ctx.moveTo(150,300);
  ctx.lineTo(180,350);
  ctx.stroke(); //line2

  ctx.moveTo(250,300);
  ctx.lineTo(280,350);
  ctx.stroke(); //line3

  ctx.moveTo(250,300);
  ctx.lineTo(220,350);
  ctx.stroke(); //line4

  ctx.moveTo(300,220);
  ctx.lineTo(350,190);
  ctx.stroke(); //line5

  ctx.beginPath();
  ctx.arc(58,170,50,0,2*Math.PI); //(x-cord. of center,y-cord.,radius,startingAngle in radians 0 is at 3 o'clock,ending Angle in radians,counterclockwise);
  ctx.stroke(); //for applying the command
};
