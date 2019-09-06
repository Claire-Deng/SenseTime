$(document).ready(function(){

    new WOW().init();

    //菜单栏的样式切换
    $("header").hover(function () {
        $("header").addClass("index_header");
        $(".logo").attr('src','image/index/logo.png')
    },
        function(){
            $("header").removeClass("index_header");
            $(".logo").attr('src','image/index/logo_white.png')
        });

    //轮播图
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

    //菜单栏第一个，图片的切换
    $(".cell:eq(0)").hover(
        function(){
            $(this).find('img').attr('src','image/index/core-tech/nav-hxjs-1-h.png');
        },
        function(){
            $(this).find('img').attr('src','image/index/core-tech/nav-hxjs-1.png');
        }
    );

    $(".cell:eq(1)").hover(
        function(){
            $(this).find('img').attr('src','image/index/core-tech/nav-hxjs-2-h.png');
        },
        function(){
            $(this).find('img').attr('src','image/index/core-tech/nav-hxjs-2.png');
        }
    );

    $(".cell:eq(2)").hover(
        function(){
            $(this).find('img').attr('src','image/index/core-tech/nav-hxjs-3-h.png');
        },
        function(){
            $(this).find('img').attr('src','image/index/core-tech/nav-hxjs-3.png');
        }
    );

    $(".cell:eq(3)").hover(
        function(){
            $(this).find('img').attr('src','image/index/core-tech/nav-hxjs-4-h.png');
        },
        function(){
            $(this).find('img').attr('src','image/index/core-tech/nav-hxjs-4.png');
        }
    );

    $(".cell:eq(4)").hover(
        function(){
            $(this).find('img').attr('src','image/index/core-tech/nav-hxjs-5-h.png');
        },
        function(){
            $(this).find('img').attr('src','image/index/core-tech/nav-hxjs-5.png');
        }
    );

    $(".cell:eq(5)").hover(
        function(){
            $(this).find('img').attr('src','image/index/core-tech/nav-hxjs-6-h.png');
        },
        function(){
            $(this).find('img').attr('src','image/index/core-tech/nav-hxjs-6.png');
        }
    );

    $(".cell:eq(6)").hover(
        function(){
            $(this).find('img').attr('src','image/index/core-tech/nav-hxjs-7-h.png');
        },
        function(){
            $(this).find('img').attr('src','image/index/core-tech/nav-hxjs-7.png');
        }
    );

    $(".cell:eq(7)").hover(
        function(){
            $(this).find('img').attr('src','image/index/core-tech/nav-hxjs-8-h.png');
        },
        function(){
            $(this).find('img').attr('src','image/index/core-tech/nav-hxjs-8.png');
        }
    );

    $(".cell:eq(8)").hover(
        function(){
            $(this).find('img').attr('src','image/index/core-tech/nav-hxjs-9-h.png');
        },
        function(){
            $(this).find('img').attr('src','image/index/core-tech/nav-hxjs-9.png');
        }
    );

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