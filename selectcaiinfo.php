<?php
include ("conn.php");
session_start();
 $tpye = $_POST['ctype'];
 $sql = "select * from food  where `food_type` like '%$tpye%'  ";
 $result = mysqli_query($link,$sql);
 $info = mysqli_fetch_all($result);
 if($info){
 header('content_type:application/json');
                 echo json_encode($info);
           }    
             ?>