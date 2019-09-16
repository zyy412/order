<?php 
include('conn.php');
session_start();
header("Content-type:text/html;charset=utf-8");
$type=$_POST["value"];
$sql="select * from food where food_type='{$type}'";
$result=mysqli_query($link,$sql);

if($result)
  {
    $row=mysqli_fetch_all($result);
   
    	 	  header('content_type:application/json;utf-8');
                       echo json_encode((object)$row);  
   	 
   }
?>















