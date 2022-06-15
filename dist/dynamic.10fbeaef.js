// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"K4Xi":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = "/* \u5934\u90E8start */\n.head{\n    position: absolute;\n    left: 50%;top: 100px;\n    width: 260px;height: 200px;\n    transform: translateX(-50%);\n    border: 2px solid #000;\n    background: rgb(37,79,87);\n    border-top-left-radius: 115px;\n    border-top-right-radius: 115px;\n    border-bottom-left-radius: 95px 100px;\n    border-bottom-right-radius: 95px 100px;\n}\n/* \u8033\u6735start */\n.ear{\n    position: absolute;\n    left: 50%;top: -40px;\n    transform: translateX(-50%);\n    border-left: 35px solid transparent;\n    border-right: 35px solid transparent;\n    border-bottom: 60px solid rgb(37,79,87);\n    z-index: 1;\n}\n.ear-left{\n    margin-left: -80px;\n    transform: translateX(-50%) rotate(-25deg);\n}\n.ear-right{\n    margin-left: 80px;\n    transform: translateX(-50%) rotate(25deg);\n}\n/* \u8033\u6735end */\n\n/* \u8138\u90E8start */\n.head .face{\n    position: absolute;\n    left: 50%;top: 20px;\n    width: 200px;height: 160px;\n    transform: translateX(-50%);\n    border: 2px solid #000;\n    background: rgb(254,234,191);\n    border-radius: 100px 100px 70px 70px;\n}\n.head .face::before{\n    content: '';\n    display: block;\n    position: absolute;\n    left: 50%;top: -2px;\n    transform: translateX(-50%);\n    width: 0;height: 0;\n    border-top: 40px solid rgb(37,79,87);\n    border-left: 50px solid transparent;\n    border-right: 50px solid transparent;\n}\n/* \u773C\u775Bstart */\n.eye{\n    position: absolute;\n    top: 52px;left: 50%;\n    width: 50px;height: 20px;\n    transform: translateX(-50%) rotate(0deg);\n    border:3px solid #000;\n    border-top-left-radius:25px 10px;\n    border-top-right-radius:25px 10px;\n    border-bottom-left-radius:25px 10px;\n    border-bottom-right-radius:25px 10px;\n}\n.eye::before{\n    content: '';\n    display: block;\n    position: absolute;\n    left: 50%;top: 6px;\n    width: 60px;height: 22px;\n    transform: translateX(-50%);\n    background: rgb(254,234,191);\n}\n.eye-left{\n    margin-left: -42px;\n}\n.eye-right{\n    margin-left: 42px;\n}\n/* \u773C\u775Bend */\n\n/* \u5634start */\n.mouth{\n    position: absolute;\n    left: 50%;top: 100px;\n    width: 80px;height: 20px;\n    transform: translateX(-50%);\n    border: 3px solid #000;\n    border-bottom-left-radius:25px 10px;\n    border-bottom-right-radius:25px 10px;\n    border-left: 0;\n    border-right: 0;\n    border-top: 0;\n}\n\n.mouth::after{\n    content:'';\n    display: block;\n    position: absolute;\n    left: 5px;top: 1px;\n    transform: rotate(15deg);\n    width: 0;height: 0;\n    border-bottom: 14px solid #fff;\n    border-left: 6px solid transparent;\n    border-right: 6px solid transparent;\n}\n\n.mouth::before{\n    content:'';\n    display: block;\n    position: absolute;\n    top: 1px;right: 5px;\n    width: 0;height: 0;\n    transform: rotate(-15deg);\n    border-bottom: 14px solid #fff;\n    border-left: 6px solid transparent;\n    border-right: 6px solid transparent;\n}\n/* \u5634end */\n/* \u8138\u90E8end */\n/* \u5934\u90E8end */\n\n/* \u8EAB\u4F53start */\n.body{\n    position: absolute;\n    left: 50%;top: 290px;\n    width: 390px;height: 360px;\n    transform: translateX(-50%);\n    background: rgb(37,79,87);\n    border: 2px solid #000;\n    border-top-left-radius: 240px 320px;\n    border-top-right-radius: 240px 320px;\n    border-bottom-left-radius: 270px 210px;\n    border-bottom-right-radius: 273px 210px;\n}\n\n.body .belly{\n    position: absolute;\n    left: 50%;top: 30px;\n    width: 310px;height: 290px;\n    transform: translateX(-50%);\n    background: rgb(254,234,191);\n    border: 2px solid #000;\n    border-top-left-radius: 317px 320px;\n    border-top-right-radius: 317px 320px;\n    border-bottom-left-radius: 279px 210px;\n    border-bottom-right-radius: 280px 210px;\n}\n\n/* \u8EAB\u4F53end */\n\n/* \u624B\u90E8start */\n.hand{\n    position: absolute;\n    left: 50%;top: 10px;\n    width: 100px;height: 200px;\n    transform:translateX(-50%);\n    border: 2px solid #000;\n    border-top-left-radius: 50px;\n    border-top-right-radius: 50px;\n    border-bottom-left-radius: 50px 150px;\n    border-bottom-right-radius: 50px 150px;\n    background: rgb(37,79,87);\n}\n.hand-left{\n    margin-left: -100px;\n    transform:translateX(-50%) rotate(-40deg);\n}\n.hand-left::after{\n    content: '';\n    display: block;\n    position: absolute;\n    bottom: -13px;left: 29px;\n    width: 0;height: 0;\n    border-top: 14px solid #fff;\n    border-left: 6px solid transparent;\n    border-right: 6px solid transparent;\n    transform: rotate(28deg);\n}\n.hand-left::before{\n    content: '';\n    display: block;\n    position: absolute;\n    bottom: -14px;left: 51px;\n    width: 0;height: 0;\n    border-top: 14px solid #fff;\n    border-left: 6px solid transparent;\n    border-right: 6px solid transparent;\n    transform: rotate(337deg);\n}\n.hand-right{\n    margin-left: 100px;\n    transform:translateX(-50%) rotate(40deg);\n}\n.hand-right::after{\n    content: '';\n    display: block;\n    position: absolute;\n    bottom: -13px;left: 29px;\n    width: 0;height: 0;\n    border-top: 14px solid #fff;\n    border-left: 6px solid transparent;\n    border-right: 6px solid transparent;\n    transform: rotate(28deg);\n}\n\n.hand-right::before{\n    content: '';\n    display: block;\n    position: absolute;\n    bottom: -14px;left: 51px;\n    width: 0;height: 0;\n    border-top: 14px solid #fff;\n    border-left: 6px solid transparent;\n    border-right: 6px solid transparent;\n    transform: rotate(337deg);\n}\n/* \u624B\u90E8end */\n/* \u817F\u90E8start */\n.footer{\n    position: absolute;\n    left: 50%;top: 240px;\n    width: 120px;height: 120px;\n    transform:translateX(-50%);\n    background: rgb(254,234,191);\n    border: 2px solid #000;\n    border-radius: 50px 50px 66px 66px;\n    animation:waggle 1.8s infinite;\n}\n@keyframes waggle{\n    0%{transform:translateX(-50%) rotate(0deg);}\n    25%{transform:translateX(-50%) rotate(-20deg);}\n    50%{transform:translateX(-50%) rotate(0deg);}\n    75%{transform:translateX(-50%) rotate(20deg);}\n    100%{transform:translateX(-50%) rotate(0deg);}\n}\n.footer-left{\n    margin-left: -130px;\n}\n.footer-right{\n    margin-left: 130px;\n}\n.footer-left::before,\n.footer-left::after,\n.footer-right::before,\n.footer-right::after{\n    content: '';\n    display: block;\n    position: absolute;\n    width: 0;height: 0;\n    border-bottom: 14px solid #fff;\n    border-left: 6px solid transparent;\n    border-right: 6px solid transparent;\n}\n.footer-left::before,\n.footer-right::before{\n    top: -16px;left: 37px;\n}\n.footer-left::after,\n.footer-right::after{\n    top: -16px;left: 65px;\n}\n.arch{\n    position: absolute;\n    left: 50%;top: 15px;\n    width: 80px;height: 80px;\n    transform:translateX(-50%);\n    background: rgb(161,98,68);\n    border: 2px solid #000;\n    border-radius: 50px 50px 66px 66px;\n}\n/* \u817F\u90E8end */";
},{}],"OSgC":[function(require,module,exports) {
'use strict';

var _css = require('./css.js');

var _css2 = _interopRequireDefault(_css);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 封装播放控制组件
var player = {
    // 计时器
    timer: undefined,
    // 打印位置
    index: 1,
    // 速度
    speed: 5,
    // 内容
    content: '',
    // 元素
    elements: {
        demo: document.getElementById('demo'),
        style: document.getElementById('style')
    },
    //元素事件
    events: {
        '#btnPause': ['click', 'pause'],
        '#btnPlay': ['click', 'play'],
        '#btnSpeed': ['click', 'setSpeed']
    },
    $: function $(selector) {
        return document.querySelectorAll(selector);
    },
    init: function init() {
        // 创建计时器，开始工作 
        player.timer = player.createTimer();
        player.bindEvents();
    },
    run: function run() {
        if (player.index > _css2.default.length) {
            player.clearTimer();
            return;
        }
        player.elements.demo.innerText = _css2.default.substr(0, player.index);
        player.elements.style.innerHTML = _css2.default.substr(0, player.index);
        player.index++;
        player.elements.demo.scrollTo(0, 9999);
    },
    bindEvents: function bindEvents() {
        // for循环遍历对象的时候可能会拿到原型中继承而来的属性
        for (var selector in player.events) {
            // 判断自身属性
            if (player.events.hasOwnProperty(selector)) {
                var eventName = player.events[selector][0];
                var eventFunctionName = player.events[selector][1];
                player.$(selector)[0].addEventListener(eventName, player[eventFunctionName]);
            }
        }
    },
    createTimer: function createTimer() {
        return setInterval(player.run, player.speed * 8);
    },
    clearTimer: function clearTimer() {
        window.clearInterval(player.timer);
    },
    pause: function pause() {
        player.clearTimer();
    },
    play: function play() {
        player.timer = player.createTimer();
    },
    setSpeed: function setSpeed() {
        player.speed - 1 === 0 ? player.speed = 5 : player.speed--;
        player.clearTimer();
        player.timer = player.createTimer();
        btnSpeed.textContent = '速度 ' + (6 - player.speed) + 'x';
    }
};

player.init();
},{"./css.js":"K4Xi"}]},{},["OSgC"], null)
//# sourceMappingURL=dynamic.10fbeaef.map