//Calculate Monthly Interest
const apr = document.querySelector('#apr');
const term = document.querySelector('#term');
const amount = document.querySelector('#amount');
const payment = document.querySelector('#payment');
document.getElementById("calculate").addEventListener('click', calcMonthlyPayment);

function calcMonthlyPayment(){
    alert('hit');
    payment.value = 6;
}

function createAPR() {
    let apr = document.querySelector('.form');

    apr.innerHTML = `
        <div class="form">
        </div>
        `;
}
