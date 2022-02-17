//Calculate Monthly Interest
var apr = document.getElementById('apr').value;
const term = document.getElementById('term');
const amount = document.getElementById('amount');

document.getElementById("calculate").addEventListener('click', calcMonthlyPayment);

function calcMonthlyPayment(){
    document.getElementById('payment').value=apr
    alert(apr.value)
}

function createAPR() {
    let apr = document.querySelector('.form');

    apr.innerHTML = `
        <div class="form">
        </div>
        `;
}