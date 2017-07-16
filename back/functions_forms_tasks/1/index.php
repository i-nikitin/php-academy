<?php
/*1. Создать форму с двумя элементами textarea. При отправке формы скрипт должен выдавать только те слова, которые есть
 и в первом и во втором поле ввода. Реализацию это логики необходимо поместить в функцию getCommonWords($a, $b), которая
будет возвращать массив с общими словами. */

//include "index.html";
$a = $_POST ['a'];
$b = $_POST ['b'];

function getCommonWords($a, $b)
{
    $a = explode(' ', $a);
    $b = explode(' ', $b);
    for ($i = 1; $i < count($a); $i++) {
        $test = false;
        for ($o = 1; $o < count($b); $o++) {
            if ($a[$i] == $b[$o]) {
                $result[] = $a[$i];
                $test = true;
                print_r($result);
            }
        }
    }
}
    getCommonWords($a, $b);



?>