let cross = document.querySelectorAll('.show-more--icon');
let list_card = document.querySelectorAll('.main-content__steps-card-list');

cross.forEach((crs, index) => {
    crs.addEventListener('click', (e) => {
        if ((e.target.style.transform == 'rotate(0deg)')) {
            e.target.style.transform = 'rotate(45deg)';
            list_card[index].classList.toggle('list-hidden');
        } else {
            e.target.style.transform = 'rotate(0deg)';
            list_card[index].classList.toggle('list-hidden');
        }
    });
});

//menu switching
var burger_img = document.querySelector('.burger-img');
function Toggle() {
    let initialImg = document.querySelector(".burger-img").src;
    let srcTest = initialImg.includes('img/burger.svg');
    let newImg = {
        'true': 'img/close.svg',
        'false': 'img/burger.svg'
    } [srcTest];
    return newImg;
}
var navSlide = () => {
    var burger = document.querySelector('.header__wrapper-nav--burger');
    var nav = document.querySelector('.header__wrapper-nav');
    var main = document.querySelector('.main');
    var footer = document.querySelector('.footer');

    burger_img.addEventListener('click', () => {
    main.classList.toggle('block');
    footer.classList.toggle('block');
    initialImg = document.querySelector(".burger-img").src = Toggle();
    nav.classList.toggle('header__wrapper-nav-active');
    })
};

navSlide();