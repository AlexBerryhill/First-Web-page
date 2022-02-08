const createHeader = () => {
    let nav = document.querySelector('.header');

    nav.innerHTML = `
        <div class="nav">
            <img src="img/logo.png" class="brand-logo" alt="logo">
            <h1 class=title>Fictitious University</h1>
        </div>
        <ul class="links-container">
            <li><a href="./assign06.html" class = 'link'>Home</a></li>
            <li><a href="./academics.html" class = 'link'>Academics</a></li>
            <li><a href="./university.html" class='link'>University</a></li>
            <li><a href="./athletics.html" class='link'>Athletics</a></li>
            <li><a href="./arts.html" class='link'>Arts</a></li>
        </ul>
    `;
}

createHeader();