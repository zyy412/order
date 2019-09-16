<?php
include ("conn.php");
session_start();
 $sql = "select * from user ";
 $result = mysqli_query($link,$sql);
 $info = mysqli_fetch_all($result);
 if($info){
 header('content_type:application/json');
                 echo json_encode($info);
           }    
             ?>