$(function(){
    mainOnly();
    searchBookDetail();
    clickTab();
    windowMobile();
    resetCheck();
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
        $(".form-search-book__bottom").hide();
        $(".search-book-detail__button").removeClass("is-open");

        $(".search-book-detail__button").on('click',function(){
            $("header").addClass("is-hide");
            $(".form-search-book__bottom").finish();
            $("wrap").addClass("is-hidden");
            $(".search-book-detail__button").text("상세검색").removeClass("is-open");
        });
        

    }else{
        $(".wrap").removeClass("is-mobile");
        $(".form-search-book__bottom").show();
        if($(".search-book-detail__button").hasClass("is-open")){
            $(".search-book-detail__button").text("상세닫기");
        }else{
            $(".search-book-detail__button").text("상세보기");
            
        }
    }

    $( window ).resize( function() {
        if($(this).width() <= 720) {
            
            $(".wrap").addClass("is-mobile");
            $(".form-search-book__bottom").hide();
            $(".search-book-detail__button").removeClass("is-open");

            $(".search-book-detail__button").click(function(){
                $("header").addClass("is-hide");
                $("wrap").addClass("is-hidden");
                $(".search-book-detail__button").text("상세검색").removeClass("is-open");
            });
        } else {
            $(".wrap").removeClass("is-mobile");
            $(".form-search-book__bottom").show();
            if($(".search-book-detail__button").hasClass("is-open")){
                $(".search-book-detail__button").text("상세닫기");
            }else{
                $(".search-book-detail__button").text("상세보기");
                
            }
        }
    } );

    if($(".wrap").hasClass("is-mobile")){
        $(".search-book-detail__button").text("상세검색");
        $(".form-search-book__bottom").hide();
    }else{
        $(".form-search-book__bottom").show();
    }


    
    $(".search-book__close-button").click(function(){
        $(".form-search-book__bottom").fadeOut();
        $("header").removeClass("is-hide");
        $("wrap").removeClass("is-hidden");
    })
}


function resetCheck(){
    $(".table-book .ui-checkbox-block").change(function () {
        var ckList = $(this).find("input[type=checkbox]");
        
        $(".ui-button--reset").on("click", function(){
            if (ckList.prop("checked") == true) {
                ckList.prop("checked", false);
            } else {
            }
        })
    });
   
}