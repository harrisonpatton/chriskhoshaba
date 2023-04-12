<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];
  
  $to = "harry.belden@gmail.com";
  $subject = "New Contact Form Submission";
  $body = "Name: $name\nEmail: $email\nMessage: $message";
  
  if (mail($to, $subject, $body)) {
    echo "Your message has been sent successfully.";
  } else {
    echo "An error occurred while sending your message.";
  }
}

?>
