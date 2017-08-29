<?php

$name = $_POST['name'];
$phone = $_POST['phone'];
$time = $_POST['time'];
$from = 'info@da-ipoteka.org';
$message = "Имя: " . $name . "\r\n" . "Телефон: " . $phone . "\r\n" . "Время: " . $time;
mail('antonliashok@gmail.com', 'Заявка ', $message, 'From:'.$from);

$redirect = isset($_SERVER['HTTP_REFERER'])? $_SERVER['HTTP_REFERER']:'index.html';

exit();


?>