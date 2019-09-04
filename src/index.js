$(document).ready(function(){

    //菜单栏的样式切换
    $("header").hover(function () {
        $("header").addClass("index_header");
        $(".logo").attr('src','image/index/logo.png')
    },
        function(){
            $("header").removeClass("index_header");
            $(".logo").attr('src','image/index/logo_white.png')
        });



    /*$(".dropdown-toggle").on("mouseover", function() {
        $(this).dropdown('dropdown-menu');
    })
    $(".dropdown-toggle").on("mouseout", function() {
        $(this).dropdown('dropdown-menu');
    })*/

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