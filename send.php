<?php

$name = $_POST['nazvisko'];
$phone = $_POST['telefon'];
$from = 'info@da-ipoteka.org';
$message = "Имя: " . $name . "\r\n" . "Телефон: " . $phone;
mail('antonliashok@gmail.com', 'Заявка ', $message, 'From:'.$from);

$redirect = isset($_SERVER['HTTP_REFERER'])? $_SERVER['HTTP_REFERER']:'index.html';

exit();

?>