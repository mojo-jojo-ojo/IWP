<!DOCTYPE html>

<!-- Demonstrating the submit and reset events. -->
<html>
   <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" charset="utf-8">
      <title>A Form Using focus and blur</title>
      <link rel = "stylesheet" type = "text/css" href = "../style/style4.css">
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
      <script src="../scripts/idle.js"></script>
      <script src = "../scripts/submitreset.js"></script>
   </head>
   <body>
      <form id = "myForm" action = "">
         <p><label class = "fixed" for = "name">Name:</label>
            <input type = "text" id =  "name"
               placeholder = "Enter name"></p>
         <p><label class = "fixed" for = "email">E-mail:</label>
            <input type = "email" id = "email"
               placeholder = "Enter e-mail address"></p>
         <p><label>Click here if you like this site
            <input type = "checkbox" id =  "like"></label></p>
         <p><label for = "comments">Any comments?</p>
         <textarea id =  "comments"
            placeholder = "Enter comments here"></textarea>
         <p><input id = "submit" type = "submit">
            <input id = "reset" type = "reset"></p>
      </form>
      <div id = "helpText"></div>
   </body>
</html>
