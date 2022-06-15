$(document).ready(function()
{
    const swiper = new Swiper('.swiper', {
        navigation: {
            nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev',
        }, pagination: {
            el: '.swiper-pagination', clickable: true, type: 'bullets',// bullets, progressbar, fraction
        }, scrollbar: {
            el: '.swiper-scrollbar',
        }, // 방향
        effect: 'fade', speed: 1000, //페이지 전환 효과
        // 자동 스크롤링
        autoplay: {
            delay: 5000, disableOnInteraction: false,
        }
    });
})