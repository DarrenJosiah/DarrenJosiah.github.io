const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
        <div class="footer-content">
                <img src="/Image/light-logo.png" class="logo" alt="">
                <div class="footer-ul-container">
                    <ul class="category">
                        <li class="category-title">men</li>
                        <li><a href="#" class="footer-link">t-shirts</a></li>
                        <li><a href="#" class="footer-link">sweatshirts</a></li>
                        <li><a href="#" class="footer-link">shirts</a></li>
                        <li><a href="#" class="footer-link">jeans</a></li>
                        <li><a href="#" class="footer-link">trousers</a></li>
                        <li><a href="#" class="footer-link">shoes</a></li>
                        <li><a href="#" class="footer-link">casuals</a></li>
                        <li><a href="#" class="footer-link">formals</a></li>
                        <li><a href="#" class="footer-link">sports</a></li>
                        <li><a href="#" class="footer-link">watch</a></li>
                    </ul>
                    <ul class="category">
                        <li class="category-title">women</li>
                        <li><a href="#" class="footer-link">t-shirts</a></li>
                        <li><a href="#" class="footer-link">sweatshirts</a></li>
                        <li><a href="#" class="footer-link">shirts</a></li>
                        <li><a href="#" class="footer-link">jeans</a></li>
                        <li><a href="#" class="footer-link">trousers</a></li>
                        <li><a href="#" class="footer-link">shoes</a></li>
                        <li><a href="#" class="footer-link">casuals</a></li>
                        <li><a href="#" class="footer-link">formals</a></li>
                        <li><a href="#" class="footer-link">sports</a></li>
                        <li><a href="#" class="footer-link">watch</a></li>
                    </ul>
                </div>
            </div>
            <p class="footer-title">about company</p>
                <p class="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio harum incidunt dolorem blanditiis veniam quidem voluptas quasi, accusamus repudiandae iste provident, neque corporis sint dolor eaque possimus distinctio, dolores tempore!</p>
                <p class="info">support emails - help@clothing.com, customersupport@clothing.com</p>
                <p class="info">telephone - 1800 000 0002</p>
                <div class="footer-social-container">
                    <div>
                        <a href="#" class="social-link">terms & services</a>
                        <a href="#" class="social-link">privacy page</a>
                    </div>
                    <div>
                        <a href="#" class="social-link">instagram</a>
                        <a href="#" class="social-link">facebook</a>
                        <a href="#" class="social-link">twitter</a>
                    </div>
                </div>
                <p class="footer-credit">Clothing, Best apparels online</p>
    `;
}

createFooter();