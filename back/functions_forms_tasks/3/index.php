<?php

function deleteWordsInFile ($num) {
    $text = file_get_contents('text.txt');
        echo "<pre>";
        var_dump($text);
        echo "</pre>";
        $content = preg_replace('/([^a-zа-я\s]|\s{2})/ui', "",$text);


        echo "$num</br>";


        $words = explode(" ", $content);

        $cutText = $text;

        foreach ($words as $item){

            if (mb_strlen($item) > $num){
                var_dump($item);
                echo mb_strlen($item);
                echo "</br>";
                $cutText = str_replace("$item", "", $text);
            };
        };

        var_dump($cutText);

    };

    if(array_key_exists('num', $_POST) && strlen($_POST['num']) > 0) {
        deleteWordsInFile($_POST['num']);
    };
?>
