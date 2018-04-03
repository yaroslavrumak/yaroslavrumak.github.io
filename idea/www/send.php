<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
$name = $_REQUEST['name'];
$email = $_REQUEST['email'];
$company = $_REQUEST['company'];
$design = $_REQUEST['select'];
    
    if (isset($_POST['email'])) {$mail = $_POST['email'];}
    if (isset($_POST['name'])) {$mail = $_POST['name'];}
    if (isset($_POST['select'])) {$mail = $_POST['select'];}
    if (isset($_POST['company'])) {$mail = $_POST['company'];}
 
    $to = "hi@andyedge.com"; /*your email*/
    $sendfrom   = $email; /*user email*/
    $headers  = "From: " . strip_tags($sendfrom) . "\r\n";
    $headers .= "Reply-To: ". strip_tags($sendfrom) . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html;charset=utf-8 \r\n";
    $subject = "Form from andyedge.com";
    $message = "Hello Andy, you have new message: <br>
    $name from $company is looking to redesign $design. His email is $email.";
    $send = mail ($to, $subject, $message, $headers);
    if ($send == 'true')
    {
    echo '
 
<h1 class="b-hero__form__small">Thank you for your message! I will contact you shortly!</h1>
 
';
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