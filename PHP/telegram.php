<?php
$token = "7647971787:AAG_ABIEHXrQEQ_aN0kjGp7OJ8MDlhukchk";
$chat_id = "494190229";

$text = "📝 Новая заявка:\n";
$text .= "Имя: " . $_POST['name'] . "\n";
$text .= "Телефон: " . $_POST['phone'] . "\n";
$text .= "Город: " . $_POST['city'] . "\n";
$text .= "Вакансия: " . $_POST['vacancy'] . "\n";

$sendToTelegram = fopen("https://api.telegram.org/bot$token/sendMessage?chat_id=$chat_id&text=" . urlencode($text), "r");

if ($sendToTelegram) {
  echo "success";
} else {
  echo "error";
}
?>