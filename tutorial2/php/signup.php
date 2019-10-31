<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Sign-Up Page</title>
    <!--<link rel="stylesheet" href="../style/signup.css">-->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="../scripts/idle.js"></script>
    <script src="../scripts/signup.js"> </script>
    <script src="../scripts/cookies.js"> </script>
  </head>

  <body>
    <p id="head"></p>
    <h3> Welcome to the sign up page!</h3>
    <form id="myForm" method="post">

      First name:<br>
      <input id="firstname" class="name" type="text" onselect="checkalpha()" value="" required><br><br>
      <p id="p1"></p>

      Last name:<br>
      <input class="name" type="text" name="lastname"  required><br><br>

      User ID(input a username):<br>
      <input id="uid" type="text" name="username"  required><br><br>
      <p id="p2"></p>

      Password(input a password):<br>
      <input id="pass" type="text" name="password" value="" ><br><br>

      Confirm Password:<br>
      <input id="cpass" type="password" name="cpassword" value="" ><br><br>
      <p id="p3"></p>

      Gender:<br>
      <input type="radio" name="gender" value="male" >Male<br>
      <input type="radio" name="gender" value="female">Female<br>
      <input type="radio" name="gender" value="other" checked>Others<br><br>

      Birth date:
      <input type="date" name="Birthday"><br><br>

      Age:
      <input id="age" type="text" name="age" required> <br><br><br>
      <p id="p4"></p>

      <input id="s1" type="button" value="Submit" onclick="formValidation()">

    </form>

  </body>
</html>
