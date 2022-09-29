$(function(){
    hamberger();
    modal();
});

function hamberger(){
    $(".subMenu-button").click(function(){
        $(this).addClass("is-fade");
        $(".subMenu-wrap").addClass("is-open");
    });
    $(".subMenu-button-close").click(function(){
        $('.subMenu-button').removeClass("is-fade");
        $(".subMenu-wrap").removeClass("is-open");
    });
}

function openModal(modalname){
    document.get
    $(".layer-background").fadeIn(300);
    $("."+modalname).fadeIn(300);
}

function modal(){
    $(".layer-background, .ui-layer-header__close").on('click',function(){
        $(".layer-background").fadeOut(300);
        $(".layer-wrap").fadeOut(300);
      });
}


  
  
