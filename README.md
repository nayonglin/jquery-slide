# slide.js是什么？
&nbsp;&nbsp;使用slide.js可以快速创建一个可以左右滑动的组件，依赖于jquery。

# slide.js使用方法
1.引入slide.js <br><br>
      &nbsp;&nbsp; npm安装: npm install slide-lin --save<br><br>
2.new一个slide对象
```javascript
new Slide(jQueryDom, userOptions);
```
# html结构如下
``` html

<div class="hour_rank">
   <div class="prev_slide enable">
	   <img src="/img/logo_left.png">
   </div>
   <div class="next_slide">
	   <img src="/img/logo_right.png">
   </div>
   <div class="center_slide">
      <ul class="ul_slide">          	
         <div class="item_slide">
        </div>        
    </ul>
   </div>
</div>

```
# 参数说明
### jQueryDom
    jquery对象，组件最外层包裹的，注意为jquery对象，而不是选择器,上例即为$('.hour_rank')
### userOptions

>1.__slideWidth__ <br>
   &nbsp;&nbsp; number类型，每一页滚动多少宽度，默认为450px，如果左滑或右滑长度已经不足该值，则自动滑到底部，上例即为$('.center_slide')的宽度<br><br>
>2.__slideSpeed__<br>
   &nbsp;&nbsp;number类型，滚动速度，单位为毫秒，默认为1000毫秒<br><br>
>3.__prevBtn__<br>
   &nbsp;&nbsp;string类型，上一页按钮的选择器，默认为".prev_slide"<br><br>
>4.__nextBtn__<br>
   &nbsp;&nbsp;string类型，下一页按钮的选择器，默认为".next_slide"
>5.__prevCallback__<br>
   &nbsp;&nbsp;function类型，滑动到最左边执行的回调方法
>6.__nextCallback__<br>
   &nbsp;&nbsp;function类型，滑动到最右边执行的回调方法
# 注意
1.上一页事件默认绑在同时拥有prev_slide和enable两个类的元素上<br>
2.下一页事件默认绑在同时拥有next_slide和enable两个类的元素上



