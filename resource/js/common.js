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

function modal(){
    var uiLayer = {
        zIndex: 10000,
        open: function (target, opener, speed) {
            var _ = uiLayer;
            var $html = $('html');
            var $layer = $('[data-layer="' + target + '"]');
            var timer = null;
            //var hasScrollBlock = true;
            var isFocus = true;
            var isCycleFocus = true;
            var speed = typeof speed === 'number' ? speed : 350;
            var $label = null;
            var hashCode = '';
            var labelID = '';
            var $layers = $('[data-layer]');
            var $preOpenLayers = $layers.filter('.js-layer-opened').not($layer);
            var notOhterElements = 'script, link, style, base, meta, br, [aria-hidden], [inert], .js-not-inert, .js-not-inert *, [data-ui-js]';
            var $ohterElements = $('body')
                .find('*')
                .not('[data-layer], [data-layer] *, ' + notOhterElements);
            var $preLayersElements = $preOpenLayers.find('*').not(notOhterElements);

            $layers.parents().each(function () {
                $ohterElements = $ohterElements.not($(this));
            });

            if ($layer.length && !$layer.hasClass('js-layer-opened')) {
                $label = $layer.find('h1, h2, h3, h4, h5, h6, p').eq(0);
                hashCode = (function () {
                    var code = $layer.data('uiJSHashCode');
                    if (!(typeof code === 'string')) {
                        //code = uiGetHashCode();
                        $layer.data('uiJSHashCode', code);
                    }
                    return code;
                })();
                // hasScrollBlock = (function () {
                //     var val = $layer.data('scroll-block');
                //     if (typeof val === 'boolean' && !val) {
                //         return false;
                //     } else {
                //         return hasScrollBlock;
                //     }
                // })();
                isFocus = (function () {
                    var val = $layer.data('focus');
                    if (typeof val === 'boolean' && !val) {
                        return false;
                    } else {
                        return isFocus;
                    }
                })();
                isCycleFocus = (function () {
                    var val = $layer.data('cycle-focus');
                    if (typeof val === 'boolean' && !val) {
                        return false;
                    } else {
                        return isCycleFocus;
                    }
                })();

                _.zIndex++;
                $layer.trigger('layerBeforeOpened').attr('role', 'dialog').attr('aria-hidden', 'true').css('visibility', 'hidden').attr('hidden', '');
                if ($label.length) {
                    labelID = (function () {
                        var id = $label.attr('id');
                        if (!(typeof id === 'string' && id.length)) {
                            id = target + '-' + hashCode;
                            $label.attr('id', id);
                        }
                        return id;
                    })();
                    $layer.attr('aria-labelledby', labelID);
                }
                $html.addClass('js-html-layer-opened js-html-layer-opened-' + target);

                $ohterElements.attr('aria-hidden', 'true').attr('inert', '').attr('data-ui-js', 'hidden');
                $preLayersElements.attr('aria-hidden', 'true').attr('inert', '').attr('data-ui-js', 'hidden');
                $preOpenLayers.attr('aria-hidden', 'true').attr('inert', '').removeAttr('aria-modal');

                if (isCycleFocus && !$layer.children('.js-loop-focus').length) {
                    $('<div class="js-loop-focus" tabindex="0"></div>')
                        .on('focusin.uiLayer', function () {
                            $layer.focus();
                        })
                        .appendTo($layer);
                }

                $layer
                    .stop()
                    .removeClass('js-layer-closed')
                    .css({
                        display: 'block',
                        zIndex: _.zIndex,
                    })
                    .animate({
                            opacity: 1,
                        },
                        speed,
                        function () {
                            $layer.trigger('layerAfterOpened');
                        }
                    )
                    .attr('tabindex', '0')
                    .attr('aria-hidden', 'false')
                    .attr('aria-modal', 'true')
                    .css('visibility', 'visible')
                    .removeAttr('hidden')
                    .data('layerIndex', $('.js-layer-opened').length);

                if (isFocus) {
                    $layer.focus();
                }

                // if (hasScrollBlock) {
                //     scrollBlock.block();
                // }

                if (Boolean(opener) && $(opener).length) {
                    $layer.data('layerOpener', $(opener));
                }

                timer = setTimeout(function () {
                    clearTimeout(timer);
                    $layer.addClass('js-layer-opened').trigger('layerOpened');
                }, 0);
            }
        },
        close: function (target, speed) {
            var $html = $('html');
            var $layer = $('[data-layer="' + target + '"]');
            var $opener = $layer.data('layerOpener');
            var $preOpenLayers = $('[data-layer].js-layer-opened').not($layer);
            // var $preOpenLayerHasScrollBlock = $preOpenLayers.not(function () {
            //     var val = $(this).data('scroll-block');
            //     if (typeof val === 'boolean' && !val) {
            //         return true;
            //     } else {
            //         return false;
            //     }
            // });
            //var isScrollBlock = $html.hasClass(scrollBlock.className.block);
            var timer = null;
            var speed = typeof speed === 'number' ? speed : 350;
            var $ohterElements = $('body').find('[data-ui-js="hidden"]');
            var preOpenLayersHigherZIndex = (function () {
                var array = [];
                $preOpenLayers.each(function () {
                    var zIndex = $(this).css('z-index');
                    array.push(zIndex);
                });
                array.sort();
                return array[array.length - 1];
            })();
            var $preOpenLayer = $preOpenLayers.filter(function () {
                var zIndex = $(this).css('z-index');

                return zIndex === preOpenLayersHigherZIndex;
            });
            var $preOpenLayerOhterElements = $preOpenLayer.find('[data-ui-js="hidden"]');

            if ($layer.length && $layer.hasClass('js-layer-opened')) {
                $layer
                    .trigger('layerBeforeClosed')
                    .stop()
                    .removeClass('js-layer-opened')
                    .addClass('js-layer-closed')
                    .css('display', 'block')
                    .data('layerIndex', null)
                    .attr('aria-hidden', 'true')
                    .removeAttr('aria-modal')
                    .animate({
                            opacity: 0,
                        },
                        speed,
                        function () {
                            $(this).css('display', 'none').css('visibility', 'hidden').attr('hidden', '').removeClass('js-layer-closed');

                            $html.removeClass('js-html-layer-closed-animate js-html-layer-opened-' + target);

                            if ($preOpenLayer.length) {
                                $preOpenLayerOhterElements.removeAttr('aria-hidden').removeAttr('inert').removeAttr('data-ui-js');
                                $preOpenLayer.attr('aria-hidden', 'false').removeAttr('inert').attr('aria-modal', 'true');
                            }

                            if (!$preOpenLayers.length) {
                                $html.removeClass('js-html-layer-opened');
                                $ohterElements.removeAttr('aria-hidden').removeAttr('inert').removeAttr('data-ui-js');
                            }

                            // if (!$preOpenLayerHasScrollBlock.length && isScrollBlock) {
                            //     scrollBlock.clear();
                            // }

                            if ($opener && $opener.length) {
                                $opener.focus();
                                $layer.data('layerOpener', null);
                            }

                            $layer.trigger('layerAfterClosed');
                        }
                    )
                    .trigger('layerClosed');

                timer = setTimeout(function () {
                    clearTimeout(timer);
                    $html.addClass('js-html-layer-closed-animate');
                }, 0);
            }
        },
        checkFocus: function (e) {
            var $layer = $('[data-layer]')
                .not(':hidden')
                .not(function () {
                    var isCycleFocus = $(this).data('cycle-focus');
                    if (typeof isCycleFocus === 'boolean' && !isCycleFocus) {
                        return true;
                    } else {
                        return false;
                    }
                });
            var $target = $(e.target);
            var $closest = $target.closest('[data-layer]');
            var lastIndex = (function () {
                var index = 0;
                $layer.each(function () {
                    var crrI = $(this).data('layerIndex');
                    if (crrI > index) {
                        index = crrI;
                    }
                });
                return index;
            })();
            var checkLayer = $layer.length && !($target.is($layer) && $target.data('layerIndex') === lastIndex) && !($closest.length && $closest.is($layer) && $closest.data('layerIndex') === lastIndex);

            if (checkLayer) {
                $layer
                    .filter(function () {
                        return $(this).data('layerIndex') === lastIndex;
                    })
                    .focus();
            }
        },
    };
    window.uiJSLayer = uiLayer;
    $(".modal[data-layer-open]").on('click', function (e) {
        var $this = $(this);
        var layer = $this.attr('data-layer-open');
        var $layer = $('[data-layer="' + layer + '"]');
        var header = $("header");
        if ($layer.length) {
            uiLayer.open(layer);
            $layer.data('layerOpener', $this);
            //header.css("z-index","0")
        }
        e.preventDefault();
    });
    $("button[data-role='layerClose']").on('click', function () {
        var $this = $(this);
        var $layer = $this.closest('[data-layer]');
        if ($layer.length) {
            uiLayer.close($layer.attr('data-layer'));
        }
    })
    
        
}
