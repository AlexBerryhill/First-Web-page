<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title style="font-family: Arial, Helvetica, sans-serif;">Piano Signup</title>
    <meta name="description" content="Piano Signup">
    <link rel="icon" href="./img/dark-logo.png" type="image/png">
    <link rel="stylesheet" href="stylesheet.css">
</head>
<body>
    <?php
        function getFile($filename){
            $data = file_get_contents($filename);
            $json_arr=json_decode($data, true);
            return $json_arr;
        }
        
        function getName($performance){
            if($performance == "Duet"){
                return $_GET['first_name']." ".$_GET['last_name']." and ".$_GET['first_name_2']." ".$_GET['last_name_2'];
            }
            else{
                return $_GET['first_name']." ".$_GET['last_name'];
            }
        }

        function getPerformance($performance){
            $text = $performance." for\n".$_GET['skill']." ".$_GET['instrument'];
            if($performance == "Duet"){
                $text .= " and ".$_GET['skill_2']." ".$_GET['instrument_2'];
            }
            return $text;
        }

        function toTable($data){
            $table = "<table><tr><th>Name</th><th>Location</th><th>Time</th><th>Performance</th></td>";
            for($i=0;$i<count($data);$i++){
                $table .="<tr><td>".$data[$i]["name"]."</td>".
                        "<td>".$data[$i]["location"]."</td>".
                        "<td>".$data[$i]["time"]."</td>".
                        "<td>".$data[$i]["performance"]."</td></tr>";
            }
            $table .= "</table>";
            return $table;
        }

        function writeFile($data, $filename){
            file_put_contents($filename, json_encode($data));
        }

        $filename = "./data/sheet.json";
        $data = getFile($filename);
        $name = getName($_GET['performance']);
        $performance = getPerformance($_GET['performance']);
        $data[] = ['name'=>$name,
                    'location'=>$_GET['location']."\nRoom ".$_GET['room'],
                    'time'=>$_GET['time_slot'],
                    'performance'=>$performance];
        writeFile($data, $filename);
        $table = toTable($data);
        echo $table;
    ?>
</body>