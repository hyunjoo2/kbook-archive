$(function(){
    hamberger();
});

function hamberger(){
    $(".subMenu-button").click(function(){
        $(".subMenu-wrap").addClass("is-open");
    });
    $(".subMenu-button-close").click(function(){
        $(".subMenu-wrap").removeClass("is-open");
    });
}
