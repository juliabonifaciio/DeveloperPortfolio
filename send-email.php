<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST['name'];
    $email = $_POST['email'];
    $assunto = $_POST['subject'];
    $mensagem = $_POST['message'];

    $to = "juliamfbonifacio@gmail.com";  // Seu e-mail aqui
    $subject = "Mensagem de Contato: " . $assunto;
    $message = "Nome: " . $nome . "\nE-mail: " . $email . "\n\nMensagem: \n" . $mensagem;
    $headers = "From: " . $email;

    if (mail($to, $subject, $message, $headers)) {
        echo "Mensagem enviada com sucesso!";
    } else {
        echo "Erro ao enviar a mensagem.";
    }
}
?>