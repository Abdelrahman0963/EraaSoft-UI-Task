document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".navbar-nav a");
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector(".navbar-collapse");

    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            if (window.innerWidth < 992) {
                navbarCollapse.classList.remove("show");
                navbarToggler.classList.add("collapsed");

            }
        });
    });
});
