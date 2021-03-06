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
    // 初始化筛选
    $("#paging").jqPaginator({
        totalPages: 50,
        visiblePages: 5,
        currentPage: 2,
        first: '<li class="first"><a href="javascript:void(0);">首页<\/a><\/li>',
        prev: '<li class="prev"><a href="javascript:void(0);"><i class="arrow arrow2"><\/i>上一页<\/a><\/li>',
        next: '<li class="next"><a href="javascript:void(0);">下一页<i class="arrow arrow3"><\/i><\/a><\/li>',
        last: '<li class="last"><a href="javascript:void(0);">末页<\/a><\/li>',
        page: '<li class="page"><a href="javascript:void(0);">{{page}}<\/a><\/li>',
        onPageChange: function (n) {
            $("#demo2-text").html("当前第" + n + "页");
        }
    });
    $("#paging li").click(function(){
        $(this).addClass('active').siblings().removeClass('active')
    })
})