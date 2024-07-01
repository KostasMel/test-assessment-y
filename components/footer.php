<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>

<!-- Initialize Swiper -->
<script>
    var swiper = new Swiper(".mySwiper", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
</script>
<footer class="footer">
    <div class="container">
        <div class="upper-row">
            <div class="footer-column info">
                <a href="#" class="footer-logo">
                    <img src="../web/images/logo.svg" alt=""/>
                </a>
                <p class="footer-description">Phosf luorescently engage worldwide method process shopping.</p>
                <div class="social-icons">
                    <ul>
                        <li class="icon facebook"><a class="facebook" href="#"></a></li>
                        <li class="icon instagram"></li>
                        <li class="icon twitter"></li>
                        <li class="icon email"></li>
                    </ul>
                </div>
            </div>
            <div class="footer-column nav-links">
                <span class="ft-text">Product</span>
                <ul>
                    <li><a class="nav-link" href="#">Learn</a></li>
                    <li><a class="nav-link"href="#">Plugins</a></li>
                    <li><a class="nav-link"href="#">Gallery</a></li>
                    <li><a class="nav-link" href="#">Pricing</a></li>
                </ul>
            </div>
            <div class="footer-column nav-links">
                <span class="ft-text">Information</span>
                <ul>
                    <li><a class="nav-link" href="#">Privacy</a></li>
                    <li><a class="nav-link" href="#">Cookies</a></li>
                    <li><a class="nav-link" href="#">Terms</a></li>
                    <li><a class="nav-link" href="#">Security</a></li>
                </ul>
            </div>
            <div class="footer-column nav-links">
                <span class="ft-text">Support</span>
                <ul>
                    <li><a class="nav-link" href="#">Updates</a></li>
                    <li><a class="nav-link" href="#">Discord</a></li>
                    <li><a class="nav-link" href="#">Startups</a></li>
                    <li><a class="nav-link" href="#">Contact</a></li>
                </ul>
            </div>
        </div>
        <div class="copyright">
            <div class="copyright-text">&copy; <?= date('Y') ?></div>
        </div>
    </div>
</footer>