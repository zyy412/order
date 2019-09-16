<?php
session_start();
header("Content-type: text/html; charset=utf-8"); //处理数据库用户名乱码
$user=$_POST["username"];
$pwd=$_POST["password"];

	 		 
 			$link=mysqli_connect("localhost","root","","diancan");//连接数据库
	 		mysqli_query($link,"set names utf8"); 
	 		$sql="select username from user where username='$user'";
        	$result=mysqli_query($link,$sql);
         	$num=mysqli_num_rows($result);//统计执行结果影响的行数
         	if($num)//如果存在该用户
         		{        
                               $code  = array('code' => 0 );
                               
          	          header('content_type:application/json');
                       echo json_encode((object)$code);
        		}
            else//注册新用户
        		 { 
         			$sql_insert="insert into user (username,password)values('$_POST[username]','$_POST[password]')";
         			$res_insert=mysqli_query($link,$sql_insert);
         			if($res_insert)
         			{   $code  = array('code' => 1 );
         				 header('content_type:application/json');
                       echo json_encode((object)$code);
         			}
         			else
         			{   $code  = array('code' => 2 );
         				 header('content_type:application/json');
                       echo json_encode((object)$code);   
         			}
          	    }
    
 ?>
