$(document).ready(function(){

    new WOW().init();

    //第二张轮播图的初始化
    var mySwiper = new Swiper ('.swiper-container', {
        autoplay:true,
        // direction: 'horizontal', // 垂直切换选项
        loop: true, // 循环模式选项

        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
            clickable :true,
        }

    });

    //菜单栏的样式切换
    $(".index header").hover(function () {
            $(this).addClass("index_header");
            $(".logo").attr('src','image/index/logo.png')
        },
        function(){
            $(this).removeClass("index_header");
            $(".logo").attr('src','image/index/logo_white.png')
        });

    //轮播图1
    var index = -1;

    $(".pic-container").children().eq(0).fadeIn(1).siblings().fadeOut(1);
    var time = setInterval(move, 7000);

    function move(){
        index++;
        if(index===4){
            index=0;
            $("#video2").trigger("play")
        }

        if(index===2){
            $("#video1").trigger("play")
        }

        $(".pic-container").children().eq(index).fadeIn(1000).siblings().fadeOut(1000);
        //console.log("index: ",index);
        $(".bar").eq(index).addClass('active').siblings().removeClass("active");
    }

    $(".pic-4-text").hover(
        function(){
            $(this).attr('src','image/index/banner/video/play-btn2.png')
        },
        function(){
            $(this).attr('src','image/index/banner/video/play-btn.png')
        }
    );


    //点击下方分页器切换页面,第一张和最后一张时button被disable
    $(".bar").click(
        function(){
            var i = $(this).index();
            index=i;
            $(".bar").eq(index).addClass('active').siblings().removeClass("active");
            $(".pic-container").children().eq(index).fadeIn(1000).siblings().fadeOut(1000);
        }
    );

    //鼠标上移切换颜色，点击左右按钮切换页面
    $(".js-carousel-button").hover(
        function(){
            $(this).toggleClass("carousel-button-hover");
        }
    );

    //点击左按钮切换页面
    $(".left-button").click(
        function(){
            while(index<1){
                return;
            }
            index--;
            $(".bar").eq(index).addClass('active').siblings().removeClass("active");
            $(".pic-container").children().eq(index).fadeIn(1000).siblings().fadeOut(1000);
        }
    );

    //点击右按钮切换页面
    $(".right-button").click(
        function(){
            while(index>2){
                return;
            }
            index++;
            $(".bar").eq(index).addClass('active').siblings().removeClass("active");
            $(".pic-container").children().eq(index).fadeIn(1000).siblings().fadeOut(1000);
        }
    );

    //返回顶部按钮
    $('#to-top').click(function(){
        $('html , body').animate({scrollTop: 0},'slow');
        return false;
    });
    var scorll_now=0;
    $(window).scroll(function(){

        if($(window).scrollTop()>200){ //离顶部200px以上才启用按钮
            if($(window).scrollTop()<scorll_now){ //保存了上次滑动停下后的scrollTop并且和目前的scrollTop比较
                $('#to-top').show(); //这次的小于上次表示正在往上滑动，所以显示
            }else{
                $('#to-top').hide();//这次的大于上次的表示正在往下滑动，所以隐藏
            }
        }else{
            $('#to-top').hide()
        }

        scorll_now=$(window).scrollTop();
    });

    var headerHeight= $('header').outerHeight();
    $('#headerHeight').height(headerHeight);

    //向下滑动则改变导航条样式
    $(window).scroll(function(){
        if($(window).scrollTop()>0){
            $("header").addClass("index_header");
            $(".logo").attr('src','image/index/logo.png')
        }else{
            $("header").removeClass("index_header");
            $(".logo").attr('src','image/index/logo_white.png')
        }
    });

    //初始化下拉菜单，设置透明度为0
    $('#phone-nav').css({'height':0,'opacity':0});
    //手机导航，点击按钮下拉菜单
    $("#nav-btn").click(
        function () {
            if($(this).hasClass('active')){
                $(this).removeClass('active');
                $('#phone-nav').css({'height':0,'opacity':0});
                $('.phone-nav-1').removeClass('active');
                $('#phone-nav>li>a').removeClass('active');
                // 点击按钮自动切换为三条平行横线
                $(this).children(".icon-bar").eq(0).removeClass("bar-1");
                $(this).children(".icon-bar").eq(1).css('background','#111');
                $(this).children(".icon-bar").eq(2).removeClass("bar-3");

            }else{
                $(this).addClass('active');
                $('#phone-nav,.phone-nav-1').css({'height':$(window).innerHeight()+'px','opacity':1});
                // 点击按钮转变为一个×
                $(this).children(".icon-bar").eq(0).addClass("bar-1");
                $(this).children(".icon-bar").eq(1).css('background','white');
                $(this).children(".icon-bar").eq(2).addClass("bar-3");
            }

        }
    );
    //菜单栏每一行跳转
    $('#phone-nav>li').each(function(i){
        if($(this).find('.phone-nav-1').length>0){
            $(this).find('a').eq(0).click(function(){
                $(this).next('.phone-nav-1').addClass('active');
            })
        }
    });

    //返回主菜单栏
    $('.fanhui').click(function(){
        $(this).parents('.phone-nav-1').removeClass('active')
    });

    //二级菜单栏跳转
    $('.phone-nav-znqc').click(
        function(){
            if($(this).hasClass('hover')){
                $(this).removeClass('hover');
                $(this).parent(".single-line").next('.phone-nav-znqc-box').slideUp();

            }else{
                $(this).addClass('hover');
                $(this).parent(".single-line").next('.phone-nav-znqc-box').slideDown();

            }
        }
    );

    // $('.phone-nav-1>a').each(function(i){
    //     if($(this).find('.phone-nav-2').length>0){
    //         $(this).find('a').eq(0).click(function(){
    //             $(this).next('.phone-nav-2').addClass('active');
    //             $('.phone-nav-1>a').addClass('active');
    //         })
    //     }
    // });

    //第一个轮播图的pagination始终居中，在屏幕宽度小于768px并且根据不同的浏览器自动适配。但是需要刷新才会显示
    if($(window).innerWidth()<=768){
        $(".my-carousel span").css('margin-left',($(window).innerWidth()-86)/2+'px');
        //去掉本身的左右滑动按钮
        $(".js-carousel-button").remove();
        // 第一张轮播图切换为小屏
        $(".pic-container>div>img").eq(0).attr('src','image/index/banner/mobile/banner5_mobi.jpg');
        $(".pic-container>div>img").eq(1).remove();
        // 第二张轮播图切换为小屏
        $(".pic-container>div").eq(1).children("img").eq(0).attr('src','image/index/banner/mobile/banner3_mobi.jpg');
        $(".pic-2-text").css(
            {
                width:function(index, value){
                    return parseFloat(value)*0.5;
                },
                height:function(index, value){
                    return parseFloat(value)*0.5;
                },
                marginTop:function(index, value){
                    return parseFloat(value)*0.5;
                }
            });
        // 第三张轮播图切换为小屏
        $(".pic-container>div").eq(2).append('<img src="image/index/banner/mobile/bannerbg1_02.png" />');
        $(".pic-container>div").eq(2).children('img').eq(1).css('width','100%');
        $(".pic-container>div").eq(2).children("video").remove();
        $(".pic-3-text").css(
            {
                width:function(index, value){
                    return parseFloat(value)*0.5;
                },
                height:function(index, value){
                    return parseFloat(value)*0.5;
                },
                marginTop:function(index, value){
                    return parseFloat(value)*0.5;
                },
                "z-index":"1"
            });
        // 第四张轮播图切换为小屏
        $(".pic-container>div").eq(3).append('<img src="image/index/banner/mobile/banner4_bg_ch_02.png" />');
        $(".pic-container>div").eq(3).children('img').eq(1).css('width','100%');
        $(".pic-container>div").eq(2).children("video").remove();
        $(".pic-4-text").css(
            {
                "margin-top":"145px",
                "z-index":"1"
            });
    }

    //第二个轮播图的代码
    var len = $(".slider li").length-1;

    //给ul设置宽度
    $(".slides").css({
        "position":"relative",
        "width":((len+1)*100).toString()+"%",
        "margin":"0",
        "padding":"0"
    });

    //给li设置宽度百分比
    $(".slides li").css({
        "width":(100/(len+1)).toString()+"%",
        "float":"left"
    });



    //移动动画

    var i = 0;

    var timer = setInterval(function(){
        moveNext(i);
    },5000);


    function moveNext(n){
        if(n===len){
            i=-1;
            $(".slider .slides").animate({right:""},800);}
        else{
            $(".slider .slides").animate({right:((n+1)*100).toString()+"%"},800)
        }
        i++;
        $(".circle-outer").eq(i).addClass("border").siblings().removeClass("border")

    }

    //点击按钮切换图片
    $(".circle-outer").click(function(){
        var dotIndex = $(this).index();
        moveNext(dotIndex);
        $(".circle-outer").eq(i).addClass("border").siblings().removeClass("border")});


    //尝试一个函数改变所有中间小图，成功！
    $(".icon-sum-cell").hover(
        function(){
            var id = $(this).index();
            $(this).find('img').attr('src','image/index/middle/'+id+'-2.png');
        },
        function(){
            var id = $(this).index();
            if( id === clickId){
                return;
            }
            $(this).find('img').attr('src','image/index/middle/'+id+'-1.png');
        }
    );

    //两个变量，一个储存当前点击的值用来改变当前的元素。一个储存上一个值，用来改变先前选中的元素的。
    var clickId = 0;
    var lastClick = 0;

    //初始化第一张图
    $(".icon-sum-cell").eq(clickId).find('img').attr('src','image/index/middle/'+clickId+'-2.png');
    //初始化第一个tab
    $(".wrapper .content").eq(clickId).fadeIn().siblings().fadeOut();

    //点击中间小图切换下面tab,更改自身和其他元素的颜色
    $(".icon-sum-cell").click(
        function(){
            clickId = $(this).index();
            $(".icon-sum-cell").eq(lastClick).find('img').attr('src','image/index/middle/'+lastClick+'-1.png');
            $(".wrapper .content").eq(clickId).fadeIn(300).siblings().fadeOut(300);
            $(this).find('img').attr('src','image/index/middle/'+clickId+'-2.png');
            lastClick = clickId;
        }
    );

    //菜单栏第一个，内容的显示隐藏
    $(".core-tech").hover(function(){
            $(this).children(".core-tech-content").slideToggle()
        }
    );

    //菜单栏第二个，内容的显示隐藏
    $(".product-service").hover(function(){
            $(this).children(".product-service-content").slideToggle()
        }
    );

    //菜单栏第三个，内容的显示隐藏
    $(".customers-examples").hover(function(){
            $(this).children(".customers-examples-content").slideToggle()
        }
    );

    //菜单栏第五个，内容的显示隐藏
    $(".about-sense").hover(function(){
            $(this).children(".five").slideToggle()
        }
    );

    //菜单栏第六个，内容的显示隐藏
    $(".join-us").hover(function(){
            $(this).children(".six").slideToggle()
        }
    );



    //一个函数改变第一个菜单栏所有图片
    // $(".cell").hover(
    //
    //     function(){
    //         var fid = $(this).index()+1;
    //         console.log(fid);
    //         $(this).find('img').attr('src','image/index/core-tech/nav-hxjs-'+fid+'-h.png');
    //     },
    //     function(){
    //         var fid = $(this).index()+1;
    //         console.log(fid);
    //         $(this).find('img').attr('src','image/index/core-tech/nav-hxjs-'+fid+'.png');
    //     }
    // );



    //菜单栏第二个，右边内容的显示隐藏
    $(".title-1").click(
        function(){
            var i = $(this).index();
            if($(this).hasClass("active")){
                $(this).removeClass("active");
                $(this).siblings(".right-content").slideUp(500).removeClass("show");
            }else{
                $(this).addClass("active");
                $(this).siblings(".right-content").slideDown(500);
            }
            //小箭头的切换动画
            if($(this).children(".iconfont").hasClass("rotate-back")){
                $(this).children(".iconfont").removeClass("rotate-back").addClass("rotate")
            }else{
                $(this).children(".iconfont").removeClass("rotate").addClass("rotate-back")
            }
        }
    );

    //菜单栏第二个，切换左侧选中内容 很神奇，这里right-container自动和left-list按照index关联上了
    $(".left-list").click(
        function(){
            var i = $(this).index();
            $(this).addClass("active");
            $(".right-container").addClass("show");
            $(".left-list:not(:eq("+i+"))").removeClass("active");
            $(".right-container:not(:eq("+i+"))").removeClass("show"); //其他元素隐藏
        }
    );




});