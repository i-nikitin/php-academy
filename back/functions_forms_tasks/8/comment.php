<?php
require_once ('function.php');

$resalt = addComment();
if (!$resalt) {
    die("Error");
}
header("Location: index.php");

