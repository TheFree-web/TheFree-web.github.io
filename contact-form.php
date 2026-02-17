<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $naam = htmlspecialchars($_POST['naam']);
    $email = htmlspecialchars($_POST['email']);
    $bericht = htmlspecialchars($_POST['bericht']);

    $to = "booking@thefree.com";  // Combell-mailbox
    $subject = "Nieuw bericht van contactformulier";
    $message = "Naam: $naam\nE-mail: $email\n\nBericht:\n$bericht";
    $headers = "From: $email\r\nReply-To: $email\r\n";

    if(mail($to, $subject, $message, $headers)) {
        echo "Bedankt! Je bericht is verstuurd.";
    } else {
        echo "Er is iets misgegaan. Probeer het later opnieuw.";
    }
}
?>
