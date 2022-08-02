const nav = document.querySelector('nav');

window.addEventListener("scroll", () => {
    if (window.scrollY !== 0) {
        nav.classList.add('headerBottom');
    } else {
        nav.classList.remove('headerBottom');
    }
});