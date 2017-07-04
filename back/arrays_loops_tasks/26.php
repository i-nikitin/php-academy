<?php

$arr[1] = rand(1,10);
$arr[2] = rand(1,10);
$arr[3] = rand(1,10);
$arr[4] = rand(1,10);
$arr[5] = rand(1,10);
$arr[6] = rand(1,10);
$arr[7] = rand(1,10);
$arr[8] = rand(1,10);
$arr[9] = rand(1,10);

foreach ($arr as $key => $ar) {

    if ($ar > 0 and $key % 2 == 0) {
        echo $key. "парные и больше нуля=".$ar."<br>";
    }
        if ($ar > 0 and $key % 2 == 1) {
            echo  $key. "парные и больше нуля=".$ar."<br>";

        }
    }

?>