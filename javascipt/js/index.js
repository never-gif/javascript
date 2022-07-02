window.addEventListener('load',function(){
//获取元素
var arrow_1=document.querySelector('.arrow-l');
var arrow_r=document.querySelector('.arrow-r')
var focus=document.querySelector('.focus');
var focusWidth=focus.offsetWidth;
//鼠标经过显示
focus.addEventListener('mouseenter',function(){
    arrow_1.style.display='block';
    arrow_r.style.display='block';
    clearInterval(timer);
    timer=null;//清除定时器变量
})
//鼠标离开隐藏
focus.addEventListener('mouseleave',function(){
    arrow_1.style.display='none';
    arrow_r.style.display='none';
    timer=setInterval(function(){
    //手动调用点击事件
    arrow_r.click();
    },1000);
})
var ul=focus.querySelector('ul');
var ol=focus.querySelector('.circle')
//动态生成小圈圈 有几张图片 我就生成几个小圈圈
for(var i=0;i<ul.children.length;i++){
    //创建一个小li
    //记录当前小圆圈的索引号 通过自定义属性来做
    li.setAttribute('index',i);
    var li=document.createElement('li');
    //把小li插入到ol里
    ol.appendChild(li);
}
li.addEventListener('click',function(){
    for(var i=0;i<ol.children.length;i++){
        ol.children[i].className=('');
    }this.className='current';
//点击小圆圈，移动图片 移动的是ul
//ul的移动距离 小圆圈的索引号 乘以图片的宽度
//当我们点击了某个小li 就得到它的索引号
var index=this.getAttribute('index');
//当我们点击了某个小li 就要把这个li的索引号给num
num=index;
//当我们点击了某个小li 就要把这个li的索引号给circle
circle=index;
console.log(focus.offWidth);
console.log(index);
animate(ul,-index*focusWidth);
})
//把ol里的第一个小li设置为current
ol.children[0].className='current';
//克隆第一张图片(li)放到ul的最后
var first=ul.children[0].cloneNode(true);
ul.appendChild(first);
//点击右侧按钮 图片滚动一张
var num=0;
//circle控制小圆圈的播放
var circle=0;
//flag节流阀
var falg=true;
//右侧按钮做法
arrow_r.addEventListener('click',function(){
    if(flag){
        flag=false;//关闭节流阀
    //无缝滚动
    if(num==ul.children.length-1){
        ul.style.left=0;
        num=0;
    }
    num++;
    animate(ul,-num*focusWidth,function(){
        flag=true;//打开节流阀
    })
    circle++;
    //如果circle==4说明走到最后我们克隆的这张图片了 我们就复原
    if(circle==ol.children.length){
        circle=0;
    }
    //先清除其余小圆圈的current类名
    for(var i=0;i<ol.children.length;i++){
        ol.children[i].className='';
    }
    //留下当前的小圆圈的current类名 
    ol.children[circle].className='current';
}
})
//左侧按钮做法
arrow_r.addEventListener('click',function(){
    if(flag){
        flag=false;//关闭节流阀
    //无缝滚动
    if(num==0){
        num=ul.children.length-1;
        ul.style.left=-num*focusWidth+'px';
    }
    num--;
    animate(ul,-num*focusWidth,function(){
        flag=true;//打开节流阀
    })
    circle--;
    //如果circle<0说明走到第一张图片 则小圆圈要改为第4个小圆圈
    if(circle<0){
        circle=ol.children.length-1;
    }
    //先清除其余小圆圈的current类名
    for(var i=0;i<ol.children.length;i++){
        ol.children[i].className='';
    }
    //留下当前的小圆圈的current类名 
    ol.children[circle].className='current';
}
})
    //自动播放轮播图
    var timer=setInterval(function(){
    //手动调用点击事件
    arrow_r.click();
    },1000);
})