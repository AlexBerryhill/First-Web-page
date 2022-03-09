const createHeader = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
    <nav id="navbar">
        <div class="nav">
            <a href="../index.html"><img src="img/logo.png" class="brand-logo" alt="logo"></a>            <div class="nav-items">
            <div class="search">
                <input type="text" class="search-box" placeholder="search brand, product">
                <button class="search-btn">search</button>
            </div>
            <a href="#"><img src="img/user.png" alt="user"></a>
            </div><!--nav-items-->
        </div><!--nav-->
    </nav><!--navbar-->
    <ul class="links-container">
        <li class="link-item"><a href="../index.html" class="link">home</a></li>
        <li class="link-item"><a href="#" class="link">APR</a></li>
        <li class="link-item"><a href="#" class="link">Term</a></li>
        <li class="link-item"><a href="#" class="link">Amount</a></li>
        <li class="link-item"><a href="#" class="link">Monthly Payment</a></li>
    </ul>
    `;
}

createHeader();