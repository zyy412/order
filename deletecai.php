<?php
include ("conn.php");
session_start();
 $id = $_POST['uid'];
 $sql = "delete    from food where `id` ='$id' ";
 $result = mysqli_query($link,$sql);
 $info = mysqli_fetch_row($result);
 if($info){
 header('content_type:application/json');
                 echo json_encode($info);
           }    
             ?>