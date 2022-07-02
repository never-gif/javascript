//当我们点击按钮 这个元素的速度会越来越快 因为开启了太多的定时器
    //解决方案就是 让我们的元素只有一个定时器执行
    //先清除以前的定时器，只保留当前的一个定时器执行
    function animate(obj,taget,callback){
        clearInterval(obj.timer);
      obj.timer=setInterval(function(){
        var step=(taget-obj.offsetLeft)/10; 
        step=step>0 ? Math.ceil(step) :Math.floor(step);
        if(obj.offsetLeft==taget){
        clearInterval(obj.timer);
        //回调函数写到定时器里面
        if(callback){
        callback();//或者callback && callback();
  }
      }
          //把每次加1的值改为缓动动画公式（步长公式）：(目标值-现在的位置)/10  (taget-obj.offsetLeft)/10
          //把步长值改为整数 不要出现小数的问题
          obj.style.left=obj.offsetLeft+step+'px';
    },10);
  }