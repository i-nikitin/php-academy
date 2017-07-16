<?php
const FILENAME = 'comments.json';

function addComment ()
{
    if (empty($_POST['user']) || empty($_POST['comment'])) {
        return true;
    }

    $comment = [
            'name' => strip_tags($_POST['user']),
            'comment' => strip_tags($_POST['comment']),
            'time' => time()
];
    $comments = getComments();
    $comments[] = $comment;
    $json = json_encode($comments);
    return (bool) file_put_contents(FILENAME, $json);
}

function getLeaveCommentForm () {

    $html = '
            <form action = "comment.php" method="POST">
            <input type="text" name="user" placeholder="Who you are?" width="200"><br>
            <textarea name="comment" width="200" ></textarea><br>
            <input type="submit" value="add">
            </form>
           ';
    return $html;
}

function getComments ()
{
    if(!file_exists(FILENAME)){
        return [];
    }
    $json= file_get_contents(FILENAME);
    return json_decode($json, true);


}

function getCommentsTable()
{
$comments = getComments();
if (!$comments) {
    return '<div><h2>No comments yet</h2></div>';
}
$keys = array_keys($comments[0]);

$html = '<table border="1"><thead>';
    foreach ($keys as $title) {
        $html .="<th>". ucfirst($title) ."</th>";
    }
    $html .= '</thead><tbody>';
    foreach ($comments as $comment) {
        $html .= '<tr>';
            foreach ($keys as $key) {
                $value = $comment[$key];
                if ($key == 'time') {
                    $value = date ('d-m-Y H:i:s',$comment[$key] );
                }
                $html .= '<td>' . $value.'</td>';
            }

        $html .= '</tr>';

    }
    $html .= '</tbody></table>';
    return $html;
}



