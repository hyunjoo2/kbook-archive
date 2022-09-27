$(function(){
    popFn();
    sitemap();
    inputReset();
    responSiteMap();
	footerMcooper();
});

function footerMcooper(){
	setTimeout(function() { 
		cooper = new Swiper('.cooper .swiper-container',{  //cooper slide
			slidesPerView:4,
			spaceBetween:1,
			navigation:{
				nextEl:'.cooper .swiper-button-next',
				prevEl:'.cooper .swiper-button-prev'
			},
			breakpoints:{
				1024:{
					slidesPerView:3,
				},
				675:{
					slidesPerView:2,
				},
				475:{
					slidesPerView:1,
					spaceBetween:0,
				}
			}
		});
	}, 500);
}

function popFn(){
    //search pop
    $('#gnb button:not(".sitemap")').click(function(){
        $('.pop_bg').addClass('on');
        $('body').addClass('bind');
    });
    $('button.finder').click(function(){
        $('.sch_pop').addClass('on');
    });
    $('button.login').click(function(){
        
        $('.login_pop').addClass('on');
    });
    $('button.join').click(function(){
        $('.join_pop').addClass('on');
    });
    $('div[class^="pop"] .close').click(function(){
        $('body').removeClass('bind');
        $('div[class^="pop"]').removeClass('on');
    })
}

function sitemap(){
    $('.sitemap').click(function(){
        $('body').addClass('bind');
        $('.siteMap').addClass('on');
    });
    $('.site_close').on({
        click:function(){
            $('body').removeClass('bind');
            $('.siteMap').removeClass('on');
        },
        mouseover:function(){
            $('.site_close').addClass('swip');
        },
        mouseleave:function(){
            $('.site_close').removeClass('swip');
        }
    });
}

function inputReset(){
    $('input[type="text"]').each(function(){
        this.value = $(this).attr('title');
        $(this).addClass('text-label');
        $(this).focus(function(){
            if(this.value == $(this).attr('title')){
                this.value = '';
                $(this).removeClass('text-label');
            };
        });
        $(this).blur(function(){
            if(this.value == ''){
                this.value = $(this).attr('title');
                $(this).addClass('text-label');
            }
        });
        
    });  
}

function responSiteMap(){
    width = $(window).width();    

    if(width < 640){
    }else{
    }

    
} 

$(window).resize(function() {
    if(this.resizeTO) {
        clearTimeout(this.resizeTO);
    }
    this.resizeTO = setTimeout(function() {
        $(this).trigger('resizeEnd');
    }, 300);
});

$(window).on('resizeEnd', function() {
	responSiteMap();
});