<?php
session_start();
header("Content-type: text/html; charset=utf-8");
// global  $user;//定义$user
// global $user1;
// $_SESSION["username"]=$user;
// $username=$_SESSION["uesrname"];
// $user1=implode("",$_SESSION);
$user1 = $_SESSION['username'];
$desk_name=$_POST["tablenum"];
$total_price=$_POST["totalprice"];
$foods_name=$_POST["foodname"];
$foods_num=$_POST["foodnum"];
//var_dump($foods_name );
$time=date("Y-m-d").$_POST["time"];
//var_dump($time);
$link=mysqli_connect("localhost","root","","diancan");//连接数据库
mysqli_query($link,"set names utf8"); 
$sql="insert into orderdetail(username,order_date,desk_name,foods_name,total_price,foods_num) 
      values('$user1','$time','$desk_name','$foods_name','$total_price','$foods_num')";
$result=mysqli_query($link,$sql);
//var_dump($result);
if($result)
   {
    $code= array('code' => 1);
    header('content_type:application/json');
                 echo json_encode((object)$code);
   }
 else
   {
     $code= array('code' => 0);
    header('content_type:application/json');
                 echo json_encode((object)$code);
   }
?>







