<?php
//Создать форму с элементом textarea. При отправке формы скрипт должен выдавать ТОП3 длинных слов в тексте.
// Реализовать с помощью функции.</p>

$a = $_POST ['text'];

$a = explode(' ', $a);
$max = $a[0];

for ($i=0; $i<count($a); $i++) {
    if(strlen($a[$i]) > strlen($max)){
        $max = $a[$i];

    }

}
echo $max;
?>

Неполучилось составить алгоритм вывода ТОП3.
