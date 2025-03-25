// Optional: Here you can add interactivity or dynamic content.
// For example, a simple scroll effect for the hero section:
document.addEventListener("DOMContentLoaded", function () {
    const hero = document.querySelector(".hero");
    hero.style.opacity = 0;
    window.addEventListener("scroll", function () {
        let value = window.scrollY / 200;
        hero.style.opacity = 1 - value;
    });
});
