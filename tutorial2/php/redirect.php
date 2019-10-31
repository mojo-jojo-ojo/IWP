<html>

<body>
  <?php
  if(isset($_POST['submit'])){
  // Fetching variables of the form which travels in URL
  $username=$_POST['username'];
  $password=$_POST['password'];

  if($username!=''&& $password!='')
  {
  //  To redirect form on a particular page
    header("main2.php")
  }
  else{
  ?><span><?php echo "Please fill all fields.";?></span> <?php
  }
  }
  ?>



Welcome <?php echo $_POST["username"]; ?><br>
Your password: <?php echo $_POST["password"]; ?>


</body>
</html>
