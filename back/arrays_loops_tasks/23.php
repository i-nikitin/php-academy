<?php
$a=123;
$a = (str_split($a));
$result = 0;
for ($i=0;$i<count($a);$i++){
    $result += $a[$i];

}
echo  $result;
?>