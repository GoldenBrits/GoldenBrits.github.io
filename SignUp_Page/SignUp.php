<?php
//Temporary cookie storage = session (variables)
session_start();

echo "Test";//See if the php File is running


$databasestring = mysqli_connect('localhost', 'root', '', 'mathstutordevon');


$username =  mysql_real_escape_string($_POST['SignUp_Username']); //injection proof
$password = mysql_real_escape_string($_POST['SignUp_Password']);
$email = mysql_real_escape_string($_POST['SignUp_Email']);
$phone = mysql_real_escape_string($_POST['SignUp_Phone']);


$hashedPassword = md5($password);//Hashing the Password


$insertUserQuery = "INSERT INTO user_data (UserName, Password, Email, Phone, IsTeacher) VALUES('$username', '$hashedPassword', '$email', '$phone', 0)";//The SQL statment that inserts the data into the database


mysqli_query($databasestring, $insertUserQuery);


$_SESSION['username'] = $username;
$_SESSION['email'] = $email;
$_SESSION['isteacher'] = false;


header('location: ../index.html');//takes the User to the designated file aka further into the website
?>
