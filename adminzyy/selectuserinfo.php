<?php
include ("conn.php");
session_start();
$name = $_POST['name'];
 $sql = "select * from user  where  `username` like '%$name%' ";
 $result = mysqli_query($link,$sql);
 $info = mysqli_fetch_all($result);

 if($info){
 header('content_type:application/json');
                 echo json_encode($info);
           }    
             ?>