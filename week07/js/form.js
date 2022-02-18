//Calculate Monthly Interest

const term = document.getElementById('term');
const amount = document.getElementById('amount');

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