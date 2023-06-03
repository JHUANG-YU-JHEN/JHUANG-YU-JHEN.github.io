$('#scrollToTop').on('click', (e) => {
    $('html, body').animate({
        scrollTop: 0
    }, 800)
})


$('.qa-item').click(function(e) {
    $(this).toggleClass('active');
    $(this).find('.add-icon').toggleClass('d-none');
    $(this).find('.remove-icon').toggleClass('d-block');
    $(this).find('.collapse-content p').toggleClass('show');
});

var mySwiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true, // 設置為循環播放
    slidesPerView: 'auto',
    autoplay: {
        delay: 0, // 輪播延遲時間（單位：毫秒）
        disableOnInteraction: false // 用戶操作後是否停止自動輪播
    },
    lazy: {
        loadPrevNext: true,
    },
    speed: 3500, // 滑動速度（單位：毫秒）
});

$(".navbar-btn").click(function() {
    $(".navbar-collapse").toggleClass("show");
});
