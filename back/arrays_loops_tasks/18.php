<?php
$arr = array("понеділок", "вівторок", "середа", "четвер", "пятниця", "субота", "неділя");
foreach ($arr as $ar) {
    if ($ar == "субота" or $ar == "неділя") {
        echo "<b>" . ($ar) . "</b>" . "<br>";
    }
        else {

        echo($ar)."<br>"; }
    }

?>
