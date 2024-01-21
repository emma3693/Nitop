<?php

     include 'databaseConn.php';

     if(isset($_POST["submit"])){
          $email = filter_input(INPUT_POST,'email',FILTER_SANITIZE_EMAIL);
          $email = filter_input(INPUT_POST,'email',FILTER_VALIDATE_EMAIL);

          if(empty($email)){
               echo "email is not valid";
          }else{
               $sql = "INSERT INTO (Emails)
                                             VALUES   ('$email)";
               
               try{
                    mysqli_query($conn,$sql);
                    echo "Succesful subscription";
               }
               catch(mysqli_sql_exception){
                    echo "could not subscribe";
               };
          }
          mysqli_close($conn);
     }
?>