let topSlider = new Swiper('.top-slider-container', {
    slideClass: 'top-slide',
    wrapperClass: 'top-slider-wrapper',
    slidesPerView: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    speed: 500,
    navigation: {
        nextEl: '.slider-next',
        prevEl: '.slider-prev'
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            centeredSlides: true,
        },
        767: {
            spaceBetween: 40,
            slidesPerView: 2,
            centeredSlides: false,
        },
        992: {
            slidesPerView: 3,
        }
    }
});
let bottomSlider = new Swiper('.bottom-slider-container', {
    slideClass: 'bottom-slide',
    wrapperClass: 'bottom-slider-wrapper',
    slidesPerView: 4,
    spaceBetween: 45,
    loop: true,
    loopFillGroupWithBlank: true,
    speed: 500,
    navigation: {
        nextEl: '.slider-next',
        prevEl: '.slider-prev'
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 2,
        },
        767: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 4,
        }
    }
});

// Open/close mobile menu
const burger_btn = document.querySelector('.header-burger-btn'),
    mobile_menu = document.querySelector('.header-nav'),
    close_menu = document.querySelector('.close-menu-btn')


burger_btn.addEventListener('click', () => {
    mobile_menu.classList.remove('header-nav-closen');
    document.querySelector('body').classList.add('scroll-lock');
});
close_menu.addEventListener('click',()=>{
    mobile_menu.classList.add('header-nav-closen');
    document.querySelector('body').classList.remove('scroll-lock');
});

// Fixed header
const header = document.querySelector('header')

window.addEventListener('scroll', ()=>{
    if(window.pageYOffset > 100) {
        header.style.background = '#477A7B';
        header.classList.add('header-padding');
    } else {
        header.style.background = 'transparent';
        header.classList.remove('header-padding');
    }
});