<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title style="font-family: Arial, Helvetica, sans-serif;">PHP Mortgage</title>
        <meta name="description" content="">
        <link rel="icon" href="./img/dark-logo.png" type="image/png">
        <link rel="stylesheet" href="stylesheet.css">
    </head>
    <body>
        <nav class="navbar"></nav>
        <script src="js/nav.js"></script>
        <div class="results">
            <h1>Confirm</h1>
            
            <?php
                echo "<br>Name: ".$_POST['first_name']." ".$_POST["last_name"];
                echo "<br>Address: ".$_POST["address"];
                echo "<br>Phone #: ".$_POST["phone"];
                echo "<br>Accecories: ";
                if(isset($_POST["item_0"])){
                    echo " item_0:$5";
                }
                if(isset($_POST["item_1"])){
                    echo " item_1:$10";
                }
                if(isset($_POST["item_2"])){
                    echo " item_2:$15";
                }
                if(isset($_POST["item_3"])){
                    echo " item_3:$20";
                }
                  
                echo "<br>Total: ".$_POST["total"];
                echo "<br>Card Type: ".$_POST["card"];
                echo "<br>Exp Date: ".$_POST["exp_date"];
            ?>
            <form action="./assign11_a.php" method="get">
                <button type="submit" name="confirm">Confirm</button>
                <button type="submit" name="cancel">Cancel</button>
            </form>
        </div>
        <footer class="footer"></footer>
        <script src="js/footer.js"></script>
    </body>
</html>