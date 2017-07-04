<?php

$row = rand(1,5);
$cols = rand(1,5);
$colors = array('red','yellow','blue','gray','maroon','brown','green');
echo '<table border="1">';
for($tr=1;$tr<=$row;$tr++) {
    echo '<tr>';
        for($td=1;$td<=$cols;$td++) {
         $number=rand(1,100);
        $i=$colors[rand(0,count($colors)-1)];
        echo "<td style='background-color:{$i}'>".$number.'</td>';
        }
    echo '</tr>';
}
echo '</table>';
?>
