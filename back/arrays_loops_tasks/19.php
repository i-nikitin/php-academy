<?php

$arr = array("Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun");
foreach ($arr as $ar) {
    $day = date('D');
    if ($ar == $day) {
        echo "<b>$ar</b><br>";
    } else {
        echo $ar . "<br>";
    }
}
?>