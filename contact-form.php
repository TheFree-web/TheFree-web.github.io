<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = strip_tags(trim($_POST["name"] ?? ""));
    $email = filter_var(trim($_POST["email"] ?? ""), FILTER_SANITIZE_EMAIL);
    $message = strip_tags(trim($_POST["message"] ?? ""));

    // Validatie
    if (empty($name) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo "Vul alle velden correct in.";
        exit;
    }

    $to = "booking@thefree.be"; // ontvangstadres
    $subject = "Nieuw bericht van $name via contactformulier";
    $body = "Naam: $name\nE-mail: $email\n\nBericht:\n$message";
    $headers = "From: $name <$email>\r\n";

    if (mail($to, $subject, $body, $headers)) {
        echo "Bedankt! Je bericht is verzonden.";
    } else {
        http_response_code(500);
        echo "Sorry, er is een fout opgetreden. Probeer later opnieuw.";
    }
} else {
    http_response_code(405);
    echo "Verzoek niet toegestaan.";
}
?>
