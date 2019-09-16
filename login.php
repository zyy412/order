<?php
    session_start();
    header("Content-type: text/html; charset=utf-8");
    $user=$_POST["username"];
	//session超全局变量
	$pwd=$_POST["password"];//获取密码
		$link=mysqli_connect("localhost","root","","diancan");//连接数据库
        mysqli_query($link,"set names utf8"); 
        $sql = "select username,password from user where username = '$_POST[username]' and password = '$_POST[password]'";  
		$result=mysqli_query($link,$sql);//执行sql语句
		$num=mysqli_num_rows($result);//统计影响结果行数，作为判断条件
		if($num)
		{     $_SESSION['username'] = $user;
			$code  = array('code' => 1 );
                               
          	     header('content_type:application/json');
                 echo json_encode((object)$code);
		}
		else
		{
			$code  = array('code' => 2);
                               
          	          header('content_type:application/json');
                       echo json_encode((object)$code);  
	    }
	
?> 
