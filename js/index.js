$(document).ready(function () {
    // 鼠标触摸每一项 显示 列表内容盒子
    $(".navMenus .nav li").mouseover(function(){
        $(this).find('.infoDetaial').css("display",'block').parent().siblings().find('.infoDetaial').css("display",'none')
    })
    // 鼠标触摸每一项 隐藏 列表内容盒子
    $(".navMenus .nav").mouseout(function(){
        $(this).find('.infoDetaial').css("display",'none')
    })
    // 按地区划分切换
    $('.dqhf .tabs li').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        var index = $(this).index();
        $('.tab').eq(index).addClass('selecetd').siblings('ul').removeClass('selecetd');
    })
    // 语言培训切换
    $('.yypx .tabs li').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        var index = $(this).index();
        $('.yypx .content .details ul').eq(index).addClass('yypx_selected').siblings('ul').removeClass('yypx_selected');
    })
     // 资格考试切换
     $('.zgks .tabs li').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        var index = $(this).index();
        $('.zgks .content .details ul').eq(index).addClass('zgks_selected').siblings('ul').removeClass('zgks_selected');
    })
       // 学习辅导切换
       $('.xxfd .tabs li').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        var index = $(this).index();
        $('.xxfd .content .details ul').eq(index).addClass('xxfd_selected').siblings('ul').removeClass('xxfd_selected');
    })
       // 热门头条和回答切换
       $('.education .hot_title span').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    })

    // 第一个轮播图效果
    var ltb1 = new Swiper('.swiper-container_one', {
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
     // 第二个轮播图效果
     
    var swiper = new Swiper('.swiper-container_two', {
        loop: true,
        //设定初始化时slide的索引
        initialSlide: 0,
        direction: 'horizontal',
        slidesPerView: 3,
        paginationClickable: true,
        spaceBetween: 5,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
    });
    
// 第三个轮播图
    var ltb3 = new Swiper('.swiper-container', {
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