const createHeader = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
    <nav id="navbar">
        <div class="nav">
            <a href="./assign11.html"><img src="img/dark-logo.png" class="brand-logo" alt=""></a>            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="search brand, product">
                    <button class="search-btn">search</button>
                </div>
                <a href="#"><img src="img/user.png" alt="user"></a>
                <a href="#"><img src="img/cart.png" alt="cart"></a>
            </div><!--nav-items-->
        </div><!--nav-->
    </nav><!--navbar-->
    <ul class="links-container">
        <li class="link-item"><a href="#" class="link">home</a></li>
        <li class="link-item"><a href="#" class="link">women</a></li>
        <li class="link-item"><a href="#" class="link">men</a></li>
        <li class="link-item"><a href="#" class="link">kids</a></li>
        <li class="link-item"><a href="#" class="link">accessories</a></li>
    </ul>
    `;
}

createHeader();