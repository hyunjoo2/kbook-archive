$(function(){
    book_wrap();
    booksListFn();
    booksViewFn();
    subMobileCheckFn();
    authorListFn();
    publicListFn();
    publicViewFn();

    tabmenu('funcTab2, v2_tab1');
    tabmenu('funcTab3, v3_tab1');
});

var tabmenu = function(obj,con_id) {  //BookList 탭
    var $tab_ID = $('#'+obj+'');
    var $con_id = $('#'+con_id+'');
     $con_id.css('display','block');
     $tab_ID.find('.tab_menu > div').each(function(index, element) {
        $(this).click(function(e) {
            event.preventDefault();
            $tab_ID.find('.con').removeAttr('style');
            $tab_ID.find('.con').eq($(this).index()).css('display','block');
            $tab_ID.find('.tab_menu > div').removeClass('on');
            if(!$(this).hasClass('on')) {
            $(this).addClass('on');
            } else {
            $(this).removeClass('on');
            }
        });
    });
};

var sBookTab;
var muCenter;
function book_wrap(){
    var mBooksList = new Swiper(".subMBooks", {
        slidesPerView:'auto',
        breakpoints: {
            640: {
                spaceBetween: 20,
                centeredSlides: true,
                loop:true,
            },
        }
    });

    sBookTab = new Swiper(".sBooksTab", {
        slidesPerView:'auto',
        preventClicks: true,
        preventClicksPropagation: false,
        observer: true,
        observeParents: true
    });

    var $snbSwiperItem = $('.sBooksTab .swiper-slide');
    $snbSwiperItem.click(function(){
        var target = $(this);
        $snbSwiperItem.parent().removeClass('on')
        target.addClass('on');
        muCenter(target);
    });

    muCenter =  muCenter(target){
        var snbwrap = $('.sBooksTab .swiper-wrapper');
        var targetPos = target.position();
        var box = $('.sBooksTab');
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

    $('.minor_wrap .grid-item .img_wrap').hover(function(){
        $(this).toggleClass('on');
    })
}

function booksListFn(){
    var booksMsnry = new Masonry( '.minor_wrap .grid', {
        itemSelector: '.minor_wrap .grid-item',
        gutter: 10
    });

    $('.minor_wrap .grid-item .info li').each(function() {
        var nowImg = $(this).find('img');  
        var srcName = nowImg.attr('src');  
        var newSrc = srcName.substring(0, srcName.lastIndexOf('.'));
        $(this).children('button ,a').hover(function() { 
            $(this).find('img').attr('src', newSrc+ '_on.' + /[^.]+$/.exec(srcName)); 
        }, function() {
            $(this).find('img').attr('src', newSrc + '.' + /[^.]+$/.exec(srcName)); 
        }); 
    });

    $('.side_list li').each(function() {
        var nowImg = $(this).find('img');  
        var srcName = nowImg.attr('src');  
        var newSrc = srcName.substring(0, srcName.lastIndexOf('.'));
        $(this).children('button ,a').hover(function() { 
            $(this).find('img').attr('src', newSrc+ '_on2.' + /[^.]+$/.exec(srcName)); 
        }, function() {
            $(this).find('img').attr('src', newSrc + '.' + /[^.]+$/.exec(srcName)); 
        }); 
    });

    $('.btn_more').hover(function(){
        $(this).toggleClass('rot');
    });
};

var $gridItem;
$(function(){
    $gridItem = $('.minor_wrap .grid').masonry({
        itemSelector: '.grid-item',
        isFitWidth: true,
        horizontalOrder: false,
        columnWidth: 1
    });

    $gridItem.on( 'layoutComplete', function( event, laidOutItems ) {
        setTimeout(function(){$('.grid-item').addClass('loaded');}, 500);
    });
});

function booksViewFn(){
    var booksMView = new Swiper('.viewMian_slide .swiper-container',{
        slidesPerView:1,
        pagination:{
            el:'.viewMian_slide .swiper-pagination',
        }
    });

    var sortMore = new Swiper('.sort_more .con .swiper-container',{
        slidesPerView:6,
        spaceBetween:10,
        navigation:{
            nextEl:'.sort_more .swiper-button-next',
            prevEl:'.sort_more .swiper-button-prev',
        }
    });
}

function authorListFn(){
    var authorTabs = new Swiper(".subMauthorsTab",{  //authors 탭 
        slidesPerView:7,
        watchSlidesVisibility:true,
        freeMode:true,
        watchSlidesProgress:true,
        allowTouchMove:false,
        resistance : false,
    });
    var authorList = new Swiper(".subMauthors", {  //authors list
        slidesPerView:1,
        allowTouchMove:false,
        thumbs:{
            swiper: authorTabs,
        },
        navigation:{
            nextEl:'.author_detail .swiper-button-next',
            prevEl:'.author_detail .swiper-button-prev',
        }
    });

}

var sup_slider;
function subMobileCheckFn(){
    var w = $(window).width();
    if( w > 1400 ){ //PC
        if(!(sup_slider == undefined)){
            sup_slider.destroy();
        }
    }else{ //mobile 
        if(sup_slider == undefined || sup_slider.destroyed == true){
            sup_slider_swiper();
        }
    }
}

function sup_slider_swiper(){
    sup_slider = new Swiper('.sup .swiper-container', {
        slidesPerView:'auto',
    });
}
$(window).resize(function(){
    subMobileCheckFn();
});

$('.sup .swiper-slide a').click(function(){
    $('.sup .swiper-slide a').removeClass('on');
    $(this).addClass('on');
});

var auBookList = new Swiper(".au_bookList .swiper-container",{  //작가의 책들 
    slidesPerView:4,
    navigation:{
        nextEl:'.au_bookList .swiper-button-next',
        prevEl:'.au_bookList .swiper-button-prev',
    },
});

function publicListFn(){
    var publicTabs = new Swiper(".subMpublisherTab",{  //publisher 탭 
        slidesPerView:6,
        watchSlidesVisibility:true,
        freeMode:true,
        watchSlidesProgress:true,
        allowTouchMove:false,
        resistance : false,
    });
    var publicList = new Swiper(".subMpublisher", {  //publisher list
        slidesPerView:1,
        allowTouchMove:false,
        thumbs:{
            swiper: publicTabs,
        },
        navigation:{
            nextEl:'.public_detail .swiper-button-next',
            prevEl:'.public_detail .swiper-button-prev',
        }
    });

    var puBookList = new Swiper(".pu_bookList .swiper-container",{  //publisher 탭 
        slidesPerView:3,
        spaceBetween:10,
        navigation:{
            nextEl:'.pu_bookList .swiper-button-next',
            prevEl:'.pu_bookList .swiper-button-prev',
        }
    });
}

function publicViewFn(){
    var puWorkList = new Swiper(".workList .swiper-container",{  //publisher 탭 
        slidesPerView:3,
        spaceBetween:7,
        navigation:{
            nextEl:'.workList .swiper-button-next',
            prevEl:'.workList .swiper-button-prev',
        },
        pagination:{
            el:'.workList .swiper-pagination'
        }
    });
    var puLateastList = new Swiper(".latestList .swiper-container",{  //publisher 탭 
        slidesPerView:4,
        spaceBetween:40,
        navigation:{
            nextEl:'.latestList .swiper-button-next',
            prevEl:'.latestList .swiper-button-prev',
        },
    });
}