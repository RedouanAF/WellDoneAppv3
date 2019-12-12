

let cross = document.querySelectorAll('.show-more--icon');
let list_card = document.querySelectorAll('.main-content__steps-card-list');

cross.forEach((crs, index) => {
    crs.addEventListener('click', (e) => {
        if((e.target.style.transform == 'rotate(0deg)')){
            e.target.style.transform = 'rotate(45deg)';
            list_card[index].classList.toggle('list-hidden');
        }
        else{
            e.target.style.transform =  'rotate(0deg)';
            list_card[index].classList.toggle('list-hidden');
        } 
    });
});

const navSlide = () =>{
    const burger = document.querySelector('.header__wrapper-nav--burger');
    const nav = document.querySelector('.header__wrapper-nav');
    var burger_img = document.querySelector('.burger-img');
    var main = document.querySelector('.main');
    var footer = document.querySelector('.footer');
    burger_img.addEventListener('click', (e)=>{
        
        if(burger_img.src === "img/groupe-84.svg"){
            //e.preventDefault();
            burger_img.src = "img/burger.svg";
            //nav.classList.toggle('header__wrapper-nav-active');
            main.classList.toggle('block');
            footer.classList.toggle('block');
            
        }else{
            
            burger_img.src = "img/groupe-84.svg";
            nav.classList.toggle('header__wrapper-nav-active');
            main.classList.toggle('block');
            footer.classList.toggle('block');
        }
        
    })
};


navSlide();
