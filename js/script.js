$(document).ready(function () {
    $("#gnb li.main-list").click(function(){
        $(this).siblings().children("ul.sub-menu").stop().slideUp(100);
        $(this).children("ul.sub-menu").stop().slideDown('fast');
    });
    // 슬라이드업다운


    $("#gnb li.main-list>a").click(function(){
        $("#gnb li.main-list>a").removeClass("bgOn");
        $(this).addClass("bgOn");
      });

      // *************   gnb main-list 클릭 색상 변경

    var toggle = 0;
    var count = 0;
    $(".hamburger_btn").click(function(){        
        if (toggle == 0) {
            $("#drawer-menu").animate({ "left" : "0" }, 500, "swing");
            toggle = 1;
            console.log(toggle);
        } else {
            $("#drawer-menu").animate({ "left" : "-200%" }, 500, "swing");
            toggle = 0;
            console.log(toggle);
        }
    }); //.hambugerClick
    
    $(".colse_btn").click(function () { 
        $("#drawer-menu").animate({ "left" : "-200%" }, 500, "swing");
        toggle = 0;
        console.log(toggle);
    }); //.colseClick


    // 탑버튼
    $("#topBtn").click(function(){
        $('html,body').stop().animate({ scrollTop: 0 });
    });

});