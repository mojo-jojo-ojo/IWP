<html>
<body>
  <?php
  $nameError ="";
  $emailError ="";
  $genderError ="";
  $websiteError ="";
  // On submitting form below function will execute.
  if(isset($_POST['submit'])){
  if (empty($_POST["username"])) {
  $nameError = "Name is required";
  } else {
  $username = test_input($_POST["username"]);
  // check name only contains letters and whitespace
  if (!preg_match("/^[a-zA-Z ]*$/",$username)) {
  $nameError = "Only letters and white space allowed";
  }
}?>

Welcome <?php echo $_POST["username"]; ?><br>


</body>
</html>
