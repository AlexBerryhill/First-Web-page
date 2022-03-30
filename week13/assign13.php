<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title style="font-family: Arial, Helvetica, sans-serif;">Piano Signup</title>
    <meta name="description" content="Piano Signup">
    <link rel="icon" href="./img/dark-logo.png" type="image/png">
    <link rel="stylesheet" href="stylesheet.css">
    <script src="php.js"></script>
</head>
<body>
    <?php
        function getFile($filename){
            $data = file_get_contents($filename);
            $json_arr=json_decode($data, true);
            return $json_arr;
        }

        function writeFile($data, $filename){
            file_put_contents($filename, json_encode($data));
        }
        $filename = "./data/sheet.json";
        $data = getFile($filename);
        $data[] = array('name'=>$_GET('first_name')." ".$_GET('last_name'),
                        'location'=>$_GET('location')."\nRoom ".$_GET('room'),
                        'time'=>$_GET('time_slot'),
                        'performance'=>$_GET('performance')." for\n".$_GET('skill')." ".$_GET('instrument'))
    ?>
</body>