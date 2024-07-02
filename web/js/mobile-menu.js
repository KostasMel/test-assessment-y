document.addEventListener('DOMContentLoaded', function () {

    const options = {
        toggleNav: '.toggle-nav',
        closeNav: '.close-nav',
        menu: '.main-menu',
        navActive: 'nav-open',
        hideScrolling: 'hide-scrolling',
        offCanvasHideDelay: 300,
    };

    const toggleNav = document.querySelector(options.toggleNav);
    const closeNav = document.querySelector(options.closeNav);
    const menu = document.querySelector(options.menu);

    /**
     * Toggles a class in the html element when the toggle button is pressed.
     */
    const toggleNavigation = () => {
        menu.classList.toggle("active");
        document.body.classList.toggle(options.hideScrolling);
        document.body.classList.toggle(options.navActive);
        document.getElementById("menu-overlay").classList.toggle("show");
    }

    toggleNav.addEventListener("click", toggleNavigation);
    closeNav.addEventListener("click", toggleNavigation);

    document.body.insertAdjacentHTML("beforeend", "<div id='menu-overlay'></div>");
    document.querySelector("#menu-overlay").addEventListener("click", toggleNavigation);
});