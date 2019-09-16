<?php 
include('conn.php');
session_start();
$username = $_SESSION['username'];

$sql="select foods_name,total_price,order_date from orderdetail where username='$username'";
$result=mysqli_query($link,$sql);
if($result)
	 {
	 	$row=mysqli_fetch_all($result);

	 	header('Content-type:application/json');
	 	echo json_encode((object)$row);
	 }
 ?>