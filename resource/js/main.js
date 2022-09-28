$(function(){
    searchBookDetail();
    clickTab();
});

function searchBookDetail(){
    $(".search-book-detail__button").click(function(){
        $(this).toggleClass("is-open");
        $(".form-search-book__bottom").slideToggle();
    })
}

function clickTab(){
    $(".search-book--tab__item, .book-list__type-item").click(function(){
        $(this).addClass("is-active");
        $(this).siblings().removeClass("is-active");
    })
}