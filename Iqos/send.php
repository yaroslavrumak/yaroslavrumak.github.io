<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
$name = $_REQUEST['name'];
$email = $_REQUEST['mail'];
$phone = $_REQUEST['phone'];
$message = $_REQUEST['message'];
$adress = $_REQUEST['adress'];
$age = $_REQUEST['age'];
$formData = $_REQUEST['formData'];
    
    if (isset($_POST['phone'])) {$mail = $_POST['phone'];}
    if (isset($_POST['name'])) {$mail = $_POST['name'];}
 
    $to = "info@maxinsurance.ca"; /*your email*/
    $sendfrom   = $email; /*user email*/
    $headers  = "From: " . strip_tags($sendfrom) . "\r\n";
    $headers .= "Reply-To: ". strip_tags($sendfrom) . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html;charset=utf-8 \r\n";
    $subject = "$formData";
    $message = "$formData <br>
<b>Name:</b> $name <br>
<b>Phone:</b> $phone <br>
<b>Email:</b> $email <br>
<b>Age:</b> $age <br>
<b>Adress:</b> $adress <br>
<p> $message </p>";
    $send = mail ($to, $subject, $message, $headers);
    if ($send == 'true')
    {
    echo '<center>
 
<h1 style="padding-top: 45px">We`ll be in touch soon :-)</h1>
 
</center>';
    }
    else
    {
    echo '<center>
 
<b>Error!</b>
 
</center>';
    }
} else {
    http_response_code(403);
    echo "Please try again!";
}?>