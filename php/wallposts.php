<?php
$con=mysqli_connect("localhost","root","root","wallofdebt");
// Check connection
if (mysqli_connect_errno()){
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

$page = $_GET['page'] * 40;

$result = mysqli_query($con, "SELECT * FROM wallpost WHERE approved = 1 LIMIT ". $page .", 30");  

if (!$result) { // add this check.
    die('Invalid query: ' . mysqli_error());
}

$json = array();

while($r = mysqli_fetch_array($result)){
  $json[] = $r;
}

echo $json_data = json_encode($json);

mysqli_close($con);
?>