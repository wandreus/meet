<?php
  $to = "wandreus.pereira@original.io";
  $subject = "HTML email";

  $message = "corpo do email";

  // Always set content-type when sending HTML email
  $headers = "MIME-Version: 1.0" . "\r\n";
  $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

  // More headers
  $headers .= 'From: <wandreus.pereira@original.io>' . "\r\n";

  mail($to,$subject,$message,$headers);
?>