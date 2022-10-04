$(function(){
    mainOnly();
    searchBookDetail();
    clickTab();
    windowMobile();
});

function mainOnly(){
    $(".main-content").parents().find(".container").next("footer").addClass("main");

}
function searchBookDetail(){
    $(".search-book-detail__button").click(function(){
        $(this).toggleClass("is-open");
        $(".form-search-book__bottom").slideToggle();

        if($(".search-book-detail__button").hasClass("is-open")){
            $(".search-book-detail__button").text("상세닫기");
        }else{
            $(".search-book-detail__button").text("상세보기");
            
        }
    })
}

function clickTab(){
    $(".search-book--tab__item, .book-list__type-item").click(function(){
        $(this).addClass("is-active");
        $(this).siblings().removeClass("is-active");
    })
}

function windowMobile(){
    var $win = $(window);
    var windowWidth = $win.width();
    var windowHeight = $win.height();

    if(windowWidth <= 720){
        $(".wrap").addClass("is-mobile");
        $(".search-book-detail__button").on('click',function(){
            $("header").addClass("is-hide");
            $(".form-search-book__bottom").finish();
            $("wrap").addClass("is-hidden");
        });
    }else{
        $(".wrap").removeClass("is-mobile")
    }

    $( window ).resize( function() {
        if($(this).width() <= 720) {
            $(".wrap").addClass("is-mobile");
            $(".search-book-detail__button").click(function(){
                $("header").addClass("is-hide");
                $("wrap").addClass("is-hidden");
            });
        } else {
            $(".wrap").removeClass("is-mobile")
        }
    } );

    if($(".wrap").hasClass("is-mobile")){
        $(".search-book-detail__button").text("상세검색");
    }


    
    $(".search-book__close-button").click(function(){
        $(".form-search-book__bottom").fadeOut();
        $("header").removeClass("is-hide");
        $("wrap").removeClass("is-hidden");
    })
}