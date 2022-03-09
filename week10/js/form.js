function reset(){
  document.getElementById("aprError").innerHTML = "";
  document.getElementById("termError").innerHTML = "";
  document.getElementById("amountError").innerHTML = "";
}

function valApr(){
    var i = document.getElementById('apr').value
    if (isNaN(i) || i < 0.01 || i > 25.00) {
        document.getElementById("aprError").innerHTML = "Input not valid";
        document.getElementById('apr').focus();
        return false;
      } else {
        document.getElementById("aprError").innerHTML = "";
        return true;
      }
}

function valTerm(){
    var n = document.getElementById('term').value
    if (isNaN(n) || n < 1 || n > 40) {
        document.getElementById("termError").innerHTML = "Input not valid";
        document.getElementById('term').focus();
        return false;
      } else {
        document.getElementById("termError").innerHTML = "";
        return true;
      }
}

function valAmount(){
    var a = document.getElementById('amount').value
    if (isNaN(a) || a < 1) {
        document.getElementById("amountError").innerHTML = "Input not valid";
        document.getElementById('amount').focus();
        return false;
      } else {
        document.getElementById("amountError").innerHTML = "";
        return true;
      }
}

function calcMonthlyPayment(){
    if(valApr()&&valTerm()&&valAmount()){
        var i = document.getElementById('apr').value/100/12;
        var n = document.getElementById('term').value*12;
        var a = document.getElementById('amount').value;
        var x = (1+i)**n
        document.getElementById('payment').value="$"+parseFloat((a*x*i)/(x-1)).toFixed(2);
    }
}