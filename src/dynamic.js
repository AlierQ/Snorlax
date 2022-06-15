import string from './css.js'

// 封装播放控制组件
const player = {
    // 计时器
    timer:undefined,
    // 打印位置
    index:1,
    // 速度
    speed:5,
    // 内容
    content:'',
    // 元素
    elements:{
        demo:document.getElementById('demo'),
        style:document.getElementById('style')
    },
    //元素事件
    events:{
        '#btnPause':['click','pause'],
        '#btnPlay':['click','play'],
        '#btnSpeed':['click','setSpeed'],
    },
    $:(selector)=>{
        return document.querySelectorAll(selector);
    },
    init:()=>{
        // 创建计时器，开始工作 
        player.timer = player.createTimer(); 
        player.bindEvents();
    },
    run:()=>{
        if(player.index > string.length){
            player.clearTimer();
            return;
        }
        player.elements.demo.innerText = string.substr(0,player.index)
        player.elements.style.innerHTML = string.substr(0,player.index)
        player.index++;
        player.elements.demo.scrollTo(0,9999);
    },
    bindEvents:()=>{
        // for循环遍历对象的时候可能会拿到原型中继承而来的属性
        for(let selector in player.events){
            // 判断自身属性
            if(player.events.hasOwnProperty(selector)){
                let eventName = player.events[selector][0];
                let eventFunctionName = player.events[selector][1];
                player.$(selector)[0].addEventListener(eventName,player[eventFunctionName])
            }
        }
    },
    createTimer:()=>{
        return setInterval(player.run,player.speed*8)
    },
    clearTimer:()=>{
        window.clearInterval(player.timer);
    },
    pause:()=>{
        player.clearTimer();
    },
    play:()=>{
        player.timer = player.createTimer();
    },
    setSpeed:()=>{
        player.speed - 1 === 0 ?  player.speed = 5 : player.speed--
        player.clearTimer()
        player.timer = player.createTimer();
        btnSpeed.textContent = '速度 '+(6-player.speed)+'x'
    }
}

player.init()
