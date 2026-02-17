<?php
// Alleen POST-verzoeken accepteren
if($_SERVER["REQUEST_METHOD"] !== "POST"){
    http_response_code(405);
    echo "Method Not Allowed";
    exit;
}

// Ontvangen data
$name = trim($_POST['name'] ?? '');
$email = trim($_POST['email'] ?? '');
$message = trim($_POST['message'] ?? '');

// Eenvoudige validatie
if(empty($name) || empty($email) || empty($message)){
    echo "Vul alle velden in!";
    exit;
}

// Ontvanger(s)
$to = "booking@thefree.com,jeroendecaluw@gmail.com";  // scheid meerdere adressen met komma

// E-mail onderwerp
$subject = "Nieuw bericht van $name via website";

// E-mail headers
$headers = "From: $name <$email>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// Bericht body
$body = "Naam: $name\n";
$body .= "E-mail: $email\n\n";
$body .= "Bericht:\n$message\n";

// Verstuur e-mail
if(mail($to, $subject, $body, $headers)){
    echo "Bedankt! Je bericht is verzonden.";
} else {
    echo "
