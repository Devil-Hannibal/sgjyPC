$(document).ready(function () {
   
    // 第一个轮播图效果
    var ltb1 = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        loop: true,
        //设定初始化时slide的索引
        initialSlide: 0,
        //自动播放
        autoplay: true,
        //滑动速度
        speed: 500,
        //滑动方向
        direction: 'horizontal',
    });
});
