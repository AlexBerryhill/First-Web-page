//Calculate Monthly Interest

const term = document.getElementById('term');
const amount = document.getElementById('amount');

function valApr(){
    var i = document.getElementById('apr').value
    if (isNaN(i) || i < 0.01 || i > 100.00) {
        document.getElementById("aprError").innerHTML = "Input not valid";
        return false;
      } else {
        document.getElementById("aprError").innerHTML = "";
        return true;
      }
}

function valTerm(){
    var n = document.getElementById('term').value
    if (isNaN(n) || n < 1 || n > 100) {
        document.getElementById("termError").innerHTML = "Input not valid";
        return false;
      } else {
        document.getElementById("termError").innerHTML = "";
        return true;
      }
}

function valAmount(){
    var a = document.getElementById('amount').value
    if (isNaN(a) || a < 0) {
        document.getElementById("amountError").innerHTML = "Input not valid";
        return false;
      } else {
        document.getElementById("amountError").innerHTML = "";
        return true;
      }
}

function calcMonthlyPayment(){
    var i = document.getElementById('apr').value/100/12;
    var n = document.getElementById('term').value*12;
    var a = document.getElementById('amount').value;
    var x = (1+i)**n
    document.getElementById('payment').value="$"+parseFloat((a*x*i)/(x-1)).toFixed(2);
}

function createAPR() {
    let apr = document.querySelector('.form');

    apr.innerHTML = `
        <div class="form">
        </div>
        `;
}