$(document).ready(function () {
    // 筛选触摸进入显示切换
    $('.headerContent .selectd_title li').mouseover(function(){
        var index = $(this).index();
        $('.headerContent .selectd_content .tabs').eq(index).addClass('active').siblings().removeClass('active');
    })
    $('.headerContent .selectd_title li').mouseout(function(){
        var index = $(this).index();
        $('.headerContent .selectd_content .tabs').eq(index).removeClass('active');
    })


});