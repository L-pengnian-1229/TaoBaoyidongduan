/**
 * Created by lenovo on 17/12/21 021.
 */
/*轮播图开始*/
var swiper = new Swiper('.flash .swiper-container', {
    spaceBetween: 30,
    centeredSlides: true,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
/*轮播图结束*/
