/**
 * 滑动组件
 * @param {string} jqueryDom  组件最外层jquery对象
 * @param {object} userOptions 用户可选参数
 */

function Slide(jqueryDom, userOptions) {
    var userOptions = userOptions ? userOptions : {}; // 判断用户是否传入了可选参数
    var options = {
        slideWidth: userOptions.slideWidth || 450,  // 每一页滚动多少宽度，默认为450px
        slideSpeed: userOptions.slideSpeed || 1000, // 滚动一页的速度
        nextBtn: userOptions.nextBtn || '.next_slide', // 下一页按钮的jquery选择器
        prevBtn: userOptions.prevBtn || '.prev_slide', // 上一页按钮的jquery选择器
        prevCallback: userOptions.prevCallback || function (){}, // 上一页动画完之后执行回调
        nextCallback: userOptions.nextCallback || function (){} // 下一页动画完之后执行回调
    }

    var dom = jqueryDom;
    if(dom.length == 0){
        return;
    }
    this.dom = dom;
    this.dom.off('click', options.prevBtn);
    this.dom.off('click', options.nextBtn);

    // 动态修改题目ul宽度
    var count = dom.find('.item_slide').length;
    if (count) {
        var width = parseInt((dom.find('.item_slide').outerWidth()));
        var marginLeft = parseInt((dom.find('.item_slide').css('margin-left').replace('px', '')));
        var marginRight = parseInt((dom.find('.item_slide').css('margin-right').replace('px', '')));
        var height = parseInt((dom.find('.item_slide').outerHeight()));
        width = width + marginLeft + marginRight;
        dom.find('.center_slide').css({
            'position': 'relative',
            'overflow': 'hidden',
            'height': height,
            'width': options.slideWidth
        }).find('.ul_slide').css({
            'width': width * count,
            'position': 'absolute',
            'top': 0,
            'left': 0 - (width * count - options.slideWidth )
        });
    }

    dom.on('click', options.nextBtn + '.enable', toNextHandler);
    dom.on('click', options.prevBtn + '.enable', toPrevHandler);
    //检测是否有下一页
    checkHasNext();
    checkHasPrev();

    // 下一页
    function toNextHandler() {
        var left = -parseInt(dom.find('.ul_slide').css('left').replace("px", ""));
        var width = parseInt(dom.find('.ul_slide').css('width').replace("px", ""));

        if (!dom.find('.ul_slide').is(':animated')) {
            if (width - left < options.slideWidth * 2) { // 下一页不足一屏
                dom.find('.ul_slide').animate({
                    'left': options.slideWidth - width
                }, options.slideSpeed, function () {
                    checkHasNext();
                    checkHasPrev();
                });
            } else {
                dom.find('.ul_slide').animate({
                    'left': '-=' + options.slideWidth
                }, options.slideSpeed, function () {
                  var isRightEnd = checkHasNext();
                  var isLeftEnd = checkHasPrev();
                  options.nextCallback({
                      isRightEnd: isRightEnd,
                      isLeftEnd: isLeftEnd
                  });
                });
            }
        }
    }

    // 上一页
    function toPrevHandler() {
        var left = -parseInt(dom.find('.ul_slide').css('left').replace("px", ""));
        var width = parseInt(dom.find('.ul_slide').css('width').replace("px", ""));
        if (!dom.find('.ul_slide').is(':animated')) {
            if (left < options.slideWidth) { // 上一页不足一屏
                dom.find('.ul_slide').animate({
                    'left': 0
                }, options.slideSpeed, function () {
                    checkHasNext();
                    checkHasPrev();
                });
            } else {
                dom.find('.ul_slide').animate({
                    'left': '+=' + options.slideWidth
                }, options.slideSpeed, function () {
                    var isRightEnd = checkHasNext();
                    var isLeftEnd = checkHasPrev();
                    options.prevCallback({
                        isRightEnd: isRightEnd,
                        isLeftEnd: isLeftEnd
                    });
                });
            }
        }
    }

    // 检查是否有下一页
    function checkHasNext() {
        var domUl = dom.find('.ul_slide');
        var position = domUl.css('left');
        var width = domUl.css('width');
        position = parseInt(position.replace('px', ''));
        width = parseInt(width.replace('px', ''));
        if ((width + position) > options.slideWidth) {
            dom.find(options.nextBtn).addClass('enable');
            return false;
        } else {
            dom.find(options.nextBtn).removeClass('enable');
            return true;
        }
    }

    // 检查是否有上一页
    function checkHasPrev() {
        var domUl = dom.find('.ul_slide');
        var position = domUl.css('left');
        position = parseInt(position.replace('px', ''));
        var width = domUl.css('width');
        width = parseInt(width.replace('px', ''));

        if (position < 0) {
            dom.find(options.prevBtn).addClass('enable');
            return false;
        } else {
            dom.find(options.prevBtn).removeClass('enable');
            return true;
        }
    }



}



