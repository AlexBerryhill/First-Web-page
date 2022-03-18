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
            
            <?php
                if(isset($_GET['confirm'])){
                    echo "Order Confirmed";
                }
                elseif(isset($_GET['cancel'])){
                    echo "Order Canceled";
                }
            ?>
        </div>
        <footer class="footer"></footer>
        <script src="js/footer.js"></script>
    </body>
</html>