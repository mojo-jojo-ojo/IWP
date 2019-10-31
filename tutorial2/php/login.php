<html>
  <head>
    <title>Login Page</title>
    <link  rel="stylesheet" href="../style/login.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

    <script src="../scripts/cookies.js"> </script>
    <script src="../scripts/login.js"></script>
    <script src="../scripts/hide.js"> </script>
    <link rel = "stylesheet" type = "text/css" href = "../style/login.css">



  </head>

  <body class="all">


    <h1> LOGIN </h1>
    <br>
    <form id="f101" method="POST" name="myForm" target="page">
      Email: <input type="text" id="uid" name="username" placeholder="Username" Required><br><br>
      Password: <input type="password" id="pass" name="password" placeholder="Password" Required><br><br>
      <br>
      <b>Captcha:</b>
      <br>
      <input type="text" id="mainCaptcha" readonly="readonly">
      <input type="button" class="pink" id="refresh" value="Refresh" onclick="generateCaptcha()">
      <br>
      <input type="text" id="captcha" name="captcha" placeholder="Enter text as shown above" Required><br><br>

      <div data-role="fieldcontain">
       <fieldset data-role="controlgroup">
           <input type="checkbox" name="remember" id="remember" class="custom" checked="true" />
           <label for="remember">Remember me ?</label></fieldset>
       </div>
       <br>
      <input type="submit" class="blue" value="Login" onclick="login()">
      <input type="reset" class="blue" name="reset" value="Reset">
    </form>
<!--"validate()"&&"-->

    <br>
    <br>
    <p> Don't have an account?</p>

    <button id="btn1" class="pink" type="button" targetr="frame" onclick="window.location.href = './signup.php';">Sign Up!</button>

  <!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/7.2.2/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/7.2.2/firebase-analytics.js"></script>

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyA7OH9HpnE9NUD8p14HxM7XQzfP9KEPUyA",
    authDomain: "mywebpage-bcf1f.firebaseapp.com",
    databaseURL: "https://mywebpage-bcf1f.firebaseio.com",
    projectId: "mywebpage-bcf1f",
    storageBucket: "mywebpage-bcf1f.appspot.com",
    messagingSenderId: "238985849484",
    appId: "1:238985849484:web:f03836fd3fff7d33b4a9a9",
    measurementId: "G-5QW99MRYC8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
</script>
  </body>

</html>
