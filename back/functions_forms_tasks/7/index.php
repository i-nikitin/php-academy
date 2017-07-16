<?php

require_once ('function.php');

$html = getCommentsTable();
$html .= getLeaveCommentForm ();
die($html);

