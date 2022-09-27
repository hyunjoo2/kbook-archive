$(function(){
    slideFn();
    tabmenu('funcTab,tabC1'); //category tab event
    catSlideFn();
    
});

function slideFn(){
    var swiperTabs = new Swiper(".visualMain > .tabs",{  //visualMain 탭 
        slidesPerView:3,
        watchSlidesVisibility:true,
        freeMode:true,
        watchSlidesProgress:true,
        allowTouchMove:false,
        resistance : false,
        breakpoint:{
            640:{
                slidesPerView:1
            },
        },
    });
    var swiperCover = new Swiper(".visualMain > .cover", {  //visualMain 탭 컨텐츠 커버
        slidesPerView:1,
        allowTouchMove:false,
        thumbs:{
            swiper: swiperTabs,
        },
        pagination:{
            el:".visualMain > .tabs > .swiper-pagination",
        },
    });

    // ----------------------------------------------------------------------------------------------

    var swiperbooks = new Swiper(".visualMain .books", {  //visualMain 첫번째 탭의 books 컨텐츠 
        slidesPerView:"auto",
        loop: true,
        breakpoints: {
            640: {
                spaceBetween: 20,
                centeredSlides: true,
            },
        }
    });

    var authorTabs = new Swiper(".video_wrap .tabs .swiper-container",{  //visualMain 두번째탭의 작가video 탭 
        slidesPerView:4,
        spaceBetween:5,
        watchSlidesVisibility:true,
        freeMode:true,
        watchSlidesProgress:true,
        allowTouchMove:false,
        resistance : false,
        breakpoints: {
            640: {
                slidesPerView:2,
                spaceBetween:20,
                allowTouchMove:true,
            },
        }
    });

    var authorCover = new Swiper(".video_wrap .videos .swiper-container", {  //visualMain 두번째탭의 작가video 컨텐츠
        slidesPerView:1,
        allowTouchMove:false,
        thumbs:{
            swiper: authorTabs,
        },
        breakpoints: {
            1024: {
                spaceBetween: 20,
                centeredSlides: true,
            },
        }
    });

    var asean = new Swiper(".asean.swiper-container", {
        slidesPerView:'auto',
        spaceBetween: 30,
        loop: false,
        slideToClickedSlide: 'true',
    })

    // ----------------------------------------------------------------------------------------------

    var bom = new Swiper('.bestseller .swiper-container',{  //Bestseller of Month slide
        slidesPerView:6,
        spaceBetween:10,
        navigation: {
            nextEl: '.bestseller .swiper-button-next',
            prevEl: '.bestseller .swiper-button-prev',
        },
        breakpoints: {
            1400: {
                slidesPerView:5,
            },
            1024:{
                slidesPerView:4,
            },
            640:{
                slidesPerView:'auto',
            },
            475:{
                slidesPerView:'auto',
            }
        }
    });
    var rok = new Swiper('.recommend .swiper-container',{  //Recommended of K-book slide
        slidesPerView:6,
        spaceBetween:10,
        navigation: {
            nextEl: '.recommend .swiper-button-next',
            prevEl: '.recommend .swiper-button-prev',
        },
        breakpoints: {
            1400: {
                slidesPerView:5,
            },
            1024:{
                slidesPerView:4,
            },
            640:{
                slidesPerView:'auto',
            },
            475:{
                slidesPerView:'auto',
            }
        }
    });

    var authors = new Swiper('.authors .swiper-container', {  //authors slide
        speed:1500,
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween:20,
        loop: true,  
        navigation: {
            nextEl: '.authors .swiper-button-next',
            prevEl: '.authors .swiper-button-prev',
        },
        breakpoints:{
            1200:{
                spaceBetween:0,
            }
        }
    });

    var buyers = new Swiper('.buyer .swiper-container',{  //buyers slide
        slidesPerView:6,
        spaceBetween:10,
        navigation: {
            nextEl: '.buyer .swiper-button-next',
            prevEl: '.buyer .swiper-button-prev',
        },
        breakpoints: {
            1400: {
                slidesPerView:5,
            },
            1024:{
                slidesPerView:4,
            },
            640:{
                slidesPerView:'auto',
            },
            475:{
                slidesPerView:'auto',
            }
        }
    });

    var bss = new Swiper('.beststeady .swiper-container',{  //beststeady slide
        slidesPerView:6,
        spaceBetween:10,
        navigation: {
            nextEl: '.beststeady .swiper-button-next',
            prevEl: '.beststeady .swiper-button-prev',
        },
        breakpoints: {
            1400: {
                slidesPerView:5,
            },
            1024:{
                slidesPerView:4,
            },
            640:{
                slidesPerView:'auto',
            },
            475:{
                slidesPerView:'auto',
            }
        }
    });

    var bookNews = new Swiper('.news .swiper-container',{  //news slide
        slidesPerView:'auto',
        spaceBetween:10,
        loop:false,
        pagination:{
            el:'.news .swiper-pagination'
        },
        breakpoints: {
            1600: {
                slidesPerView:5,
            },
            1400: {
                slidesPerView:4,
            },
            1024:{
                slidesPerView:3,
            },
            640:{
                slidesPerView:2,
            },
        }
    });

    var trend = new Swiper('.trends .swiper-container',{  //trends slide
        slidesPerView:2,
        spaceBetween:20,
        pagination:{
            el:'.trends .swiper-pagination',
            type:'bullets',
        },
        breakpoints:{
            1400:{
                slidesPerView:1,
            },
            1024:{
                slidesPerView:2,
            }
        }
    });

    // ----------------------------------------------------------------------------------------------

    $('.slide_books .swiper-slide').hover(function(){
        $(this).toggleClass('up');
    })
    
};

var tabmenu = function(obj,con_id) {  //category tab event
    var $tab_ID = $('#'+obj+'');
    var $con_id = $('#'+con_id+'');
     $con_id.css('display','block');
     $tab_ID.find('.cat_tab .swiper-slide').each(function(index, element) {
        $(this).click(function(e) {
            event.preventDefault();
            $tab_ID.find('.con').removeAttr('style');
            $tab_ID.find('.con').eq($(this).index()).css('display','block');
            $tab_ID.find('.cat_tab .swiper-slide').removeClass('on');
            if(!$(this).hasClass('on')) {
            $(this).addClass('on');
            } else {
            $(this).removeClass('on');
            }
        });
    });
};

function catSlideFn(){   // 카테고리 슬라이드
    var cat_slider;
    function mainCatTab(){
        var w = $(window).width();
        if( w > 1024 ){ //PC
            if(!(cat_slider == undefined)){
                cat_slider.destroy();
            }
        }else{ //mobile 
            if(cat_slider == undefined || cat_slider.destroyed == true){
                catSlider();
            }
        }
    }
    function catSlider(){
        cat_slider = new Swiper('.cat_tab.swiper-container', {
            slidesPerView:'auto',
        });
    }
    $(window).resize(function(){
        mainCatTab();
    });

    var $snbSwiperItem = $('.cat_tab .swiper-slide');
    $snbSwiperItem.click(function(){
        var target = $(this);
        $snbSwiperItem.parent().removeClass('on')
        target.addClass('on');
        muCenter(target);
    });

    function muCenter(target){
        var snbwrap = $('.cat_tab .swiper-wrapper');
        var targetPos = target.position();
        var box = $('.cat_tab');
        var boxHarf = box.width()/2;
        var pos;
        var listWidth=0;
        
        snbwrap.find('.swiper-slide').each(function(){ listWidth += $(this).outerWidth(); })
        
        var selectTargetPos = targetPos.left + target.outerWidth()/2;
        if (selectTargetPos <= boxHarf) { // left
            pos = 0;
        }else if ((listWidth - selectTargetPos) <= boxHarf) { //right
            pos = listWidth-box.width();
        }else {
            pos = selectTargetPos - boxHarf;
        }

        setTimeout(function(){snbwrap.css({
            "transform": "translate3d("+ (pos*-1) +"px, 0, 0)",
            "transition-duration": "500ms"
        })}, 200);
    }
}
