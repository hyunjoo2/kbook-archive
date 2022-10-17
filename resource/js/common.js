$(function(){
    hamberger();
    modal();
    inputOn();
    //selectCustom();
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
    $(".layer-background, .ui-layer-header__close, .modal-close").on('click',function(){
        
        $(".layer-background").fadeOut(300);
        $(".layer-wrap").fadeOut(300);
      });
}



// var oldVal="";
// var btnPayment=$('.btn-payment');
// $(".payment-btn-active").on("change keyup paste", function() {
//   var currentVal = $(this).val();
//   if(currentVal == oldVal) {
//     btnPayment.attr('disabled',true)
//   } else {
//     btnPayment.attr('disabled',false)
//   }
// });
 
function inputOn(){
    
    $(".ui-input, .ui-textarea").on("change keyup paste", function() {
        var currentVal = $(this).val();
        if(currentVal == "") {
            $(this).removeClass("is-inputed");
        } else {
            $(this).addClass("is-inputed");
        }
    });

    $(".ui-select").on("change keyup paste", function() {
        var result = $('.ui-select option:selected').val();
        if(result == "") {
            $(this).addClass("is-inputed");
        } else {
            $(this).removeClass("is-inputed");
        }
    });


    /* 셀렉트박스 보이게 하기 */
    $("body").on("click", ".ui-select__custom-title", function () {
        $(this).next().toggle();
        $(this).parent().addClass("is-show");
    })

    /* 셀렉트 박스 옵션 선택 */
    $(".ui-select__custom li").on("click", function () {
        var text = $(this).html();
        $(this).parent().parent().find(".ui-select__custom-title").html(text);
        $(this).parent().toggle();
    })
    
    /* 셀렉트 박스 이외 선택시 보이지 않게 하기 */
    $("body").on("click", function(e){
        if($(".ui-select__custom").css("display") == "block"){
            if($(".ui-select__custom-wrap").has(e.target).length == 0){
                $(".ui-select__custom").hide();
                //$(".ui-select__custom-wrap").removeClass("is-show");
            }
        }
    
    });

    //파일명 추출 
    var fileTarget = $('.filebox .upload-hidden');

    fileTarget.on('change', function(){  // 값이 변경되면
        if(window.FileReader){  // modern browser
        var filename = $(this)[0].files[0].name;
        } 
        else {  // old IE
        var filename = $(this).val().split('/').pop().split('\\').pop();  // 파일명만 추출
        }
        
        // 추출한 파일명 삽입
        $(this).siblings('.upload-name').val(filename);
        $(this).siblings('.upload-name').addClass("is-inputed");

    });

}


  
  
