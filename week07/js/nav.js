const createNav = () => {
    let nav = document.querySelector('.nav');

    nav.innerHTML = `
        <div class="nav">
            <img src="img/logo.png" class="logo" alt="logo">
            <h1 class=title>JavaScript Calculator</h1>
        </div>
        <ul class="links-container">
            <li><a href="./assign07.html" class = 'link'>Home</a></li>
            <li><a href="../index.html" class = 'link'>Index</a></li>
            <li><a href="#" class = 'link'>APR</a></li>
            <li><a href="#" class = 'link'>Loan Term</a></li>
            <li><a href="#" class = 'link'>Loan Amount</a></li>
            <li><a href="#" class = 'link'>Monthly Payment</a></li>
        </ul>
    `;
}

createNav();