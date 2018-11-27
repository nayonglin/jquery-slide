#slide.js是什么？
&nbsp;&nbsp;使用slide.js可以快速创建一个可以左右滑动的组件。

#slide.js使用方法
1.引入slide.js<br>
2.new一个slide对象
```javascript
new Slide(jQueryDom, slideWidth, slideSpeed);
```
#html结构如下
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
#参数说明






