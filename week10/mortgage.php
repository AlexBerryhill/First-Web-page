<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title style="font-family: Arial, Helvetica, sans-serif;">PHP Mortgage</title>
        <meta name="description" content="Find your monthly payment with PHP">
        <link rel="icon" href="./img/logo.png" type="image/png">
        <link rel="stylesheet" href="stylesheet.css">
    </head>
    <body>
        <nav class="navbar"></nav>
        <script src="js/nav.js"></script>
        <div class="form" id="results">
            <h1>Results</h1>
            
            <?php
                $i = $_GET['apr']/100/12;
                $n = $_GET['term']*12;
                $a = $_GET['amount'];
                $x = (1+$i)**$n;
                $payment=($a*$x*$i)/($x-1);
                echo "<br>APR: ".($i*100*12)." %";
                echo "<br>Term: ".$n." months";
                echo "<br>Amount: $".round($a,2);
                echo "<br>Monthly Payment: $".round($payment, 2);
            ?>
        </div>
        <footer class="footer"></footer>
        <script src="js/footer.js"></script>
    </body>
</html>