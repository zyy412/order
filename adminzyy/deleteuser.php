<?php
include ("conn.php");
session_start();
$uid = $_POST['uid'];
 $sql = "delete from user where `id` ='$uid' ";
 $result = mysqli_query($link,$sql);
 var_dump($result);
 $info = mysqli_fetch_row($result);
 if($info){
 	$array = array('code' =>1  );
 header('content_type:application/json');
                 echo json_encode($array);
           }    
             ?>