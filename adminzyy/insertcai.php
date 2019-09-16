  
<?php
include ("conn.php");
session_start();
 $id = $_POST['food_id'];
$type = $_POST['food_type'];
$price = $_POST['price'];
$name = $_POST['food_name'];


  if($_FILES){
       $file = $_FILES['picture'];
       $file_name = $id;
       $tpye    =".jpg";
       $tmp_file = $file['tmp_name'];
           
        if(move_uploaded_file($tmp_file, 'D:/wamp64/www/diancan/'.$file_name.$tpye))
        {
          $new= $file_name.$tpye;            
                  $result = "http://localhost/diancan/".$new;
                
            $sql ="insert into food (`food_id`,`food_name`,`food_type`,`price`,`img`) values('$id','$name','$type','$price',
            '$result')";
        
            $result = mysqli_query($link,$sql);
            
           
          if($result){
            $info = array('code' =>1  );
            header('content_type:application/json');
                 echo json_encode($info);
           } 
           }  
           } 
             ?>
    
              
                   


 



