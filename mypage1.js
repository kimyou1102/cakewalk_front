const header = document.querySelector('header');
const rightBtn = document.querySelector('.right-btn');
const cakeList = document.querySelector('.cakes');

window.addEventListener("scroll", () => {
    if (window.scrollY !== 0) {
        header.classList.add('headerBottom');
    } else {
        header.classList.remove('headerBottom');
    }
});

rightBtn.addEventListener("click", () => {
    cakeList.scrollLeft += 350;
})