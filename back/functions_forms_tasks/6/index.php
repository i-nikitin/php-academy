<?php
header('Conntent-type: image/jpg');


if(!isset($_FILES['file'])) {
    $html = "<form action='index.php'  method='post' enctype='multipart/form-data'>
    <input type='file' name='file'>
    <input type='submit' value='Отправить'>
    
    </form>";

    die($html);
}
else {

    print_r($_FILES);
    $tmpName = $_FILES['file']['tmp_name'];
    move_uploaded_file($tmpName, 'images/' . $_FILES['file']['name']);
    die();
}


?>


