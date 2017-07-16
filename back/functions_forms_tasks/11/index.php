<?php

$text = isset($_POST['text']) ? $_POST['text'] : '';
$pieces = explode('.', $text);

$out = implode ( ".", array_map(function ($string) {
return ucfirst(trim($string));
}, $pieces));

die($out);

//Только почему-то это не работает при вводе русского текста.