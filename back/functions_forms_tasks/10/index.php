<?php
include 'index.html';
function unique($arg){
    $b=explode(' ',mb_strtolower($arg));
    echo 'Всего слов - '.count($b);
    $b=array_unique($b);
    echo '; Уникальных слов - '.count($b);
}

unique($_POST['text']);