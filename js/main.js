const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function() {
    searchInputEl.focus();
})

searchInputEl.addEventListener('focus', function() {
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function() {
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
})



//visual 영역 슬라이드
new Swiper('.visual .swiper', {
    direction: 'horizontal',
    slidesPerView: 1,
    loop: true,

    pagination: {
        el: '.visual .swiper-pagination'
    },

    navigation: {
        prevEl: '.visual .swiper-button-prev',
        nextEl: '.visual .swiper-button-next',
    },

});