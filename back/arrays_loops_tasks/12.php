<?php

$num = 0;
for ($n=1000; $n>50; $n/=2) {
    echo "$n"."<br>";
    $num++;
}
echo "Количество итераций:".$num;
?>