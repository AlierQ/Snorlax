export default `/* 头部start */
.head{
    position: absolute;
    left: 50%;top: 100px;
    width: 260px;height: 200px;
    transform: translateX(-50%);
    border: 2px solid #000;
    background: rgb(37,79,87);
    border-top-left-radius: 115px;
    border-top-right-radius: 115px;
    border-bottom-left-radius: 95px 100px;
    border-bottom-right-radius: 95px 100px;
}
/* 耳朵start */
.ear{
    position: absolute;
    left: 50%;top: -40px;
    transform: translateX(-50%);
    border-left: 35px solid transparent;
    border-right: 35px solid transparent;
    border-bottom: 60px solid rgb(37,79,87);
    z-index: 1;
}
.ear-left{
    margin-left: -80px;
    transform: translateX(-50%) rotate(-25deg);
}
.ear-right{
    margin-left: 80px;
    transform: translateX(-50%) rotate(25deg);
}
/* 耳朵end */

/* 脸部start */
.head .face{
    position: absolute;
    left: 50%;top: 20px;
    width: 200px;height: 160px;
    transform: translateX(-50%);
    border: 2px solid #000;
    background: rgb(254,234,191);
    border-radius: 100px 100px 70px 70px;
}
.head .face::before{
    content: '';
    display: block;
    position: absolute;
    left: 50%;top: -2px;
    transform: translateX(-50%);
    width: 0;height: 0;
    border-top: 40px solid rgb(37,79,87);
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
}
/* 眼睛start */
.eye{
    position: absolute;
    top: 52px;left: 50%;
    width: 50px;height: 20px;
    transform: translateX(-50%) rotate(0deg);
    border:3px solid #000;
    border-top-left-radius:25px 10px;
    border-top-right-radius:25px 10px;
    border-bottom-left-radius:25px 10px;
    border-bottom-right-radius:25px 10px;
}
.eye::before{
    content: '';
    display: block;
    position: absolute;
    left: 50%;top: 6px;
    width: 60px;height: 22px;
    transform: translateX(-50%);
    background: rgb(254,234,191);
}
.eye-left{
    margin-left: -42px;
}
.eye-right{
    margin-left: 42px;
}
/* 眼睛end */

/* 嘴start */
.mouth{
    position: absolute;
    left: 50%;top: 100px;
    width: 80px;height: 20px;
    transform: translateX(-50%);
    border: 3px solid #000;
    border-bottom-left-radius:25px 10px;
    border-bottom-right-radius:25px 10px;
    border-left: 0;
    border-right: 0;
    border-top: 0;
}

.mouth::after{
    content:'';
    display: block;
    position: absolute;
    left: 5px;top: 1px;
    transform: rotate(15deg);
    width: 0;height: 0;
    border-bottom: 14px solid #fff;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
}

.mouth::before{
    content:'';
    display: block;
    position: absolute;
    top: 1px;right: 5px;
    width: 0;height: 0;
    transform: rotate(-15deg);
    border-bottom: 14px solid #fff;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
}
/* 嘴end */
/* 脸部end */
/* 头部end */

/* 身体start */
.body{
    position: absolute;
    left: 50%;top: 290px;
    width: 390px;height: 360px;
    transform: translateX(-50%);
    background: rgb(37,79,87);
    border: 2px solid #000;
    border-top-left-radius: 240px 320px;
    border-top-right-radius: 240px 320px;
    border-bottom-left-radius: 270px 210px;
    border-bottom-right-radius: 273px 210px;
}

.body .belly{
    position: absolute;
    left: 50%;top: 30px;
    width: 310px;height: 290px;
    transform: translateX(-50%);
    background: rgb(254,234,191);
    border: 2px solid #000;
    border-top-left-radius: 317px 320px;
    border-top-right-radius: 317px 320px;
    border-bottom-left-radius: 279px 210px;
    border-bottom-right-radius: 280px 210px;
}

/* 身体end */

/* 手部start */
.hand{
    position: absolute;
    left: 50%;top: 10px;
    width: 100px;height: 200px;
    transform:translateX(-50%);
    border: 2px solid #000;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    border-bottom-left-radius: 50px 150px;
    border-bottom-right-radius: 50px 150px;
    background: rgb(37,79,87);
}
.hand-left{
    margin-left: -100px;
    transform:translateX(-50%) rotate(-40deg);
}
.hand-left::after{
    content: '';
    display: block;
    position: absolute;
    bottom: -13px;left: 29px;
    width: 0;height: 0;
    border-top: 14px solid #fff;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    transform: rotate(28deg);
}
.hand-left::before{
    content: '';
    display: block;
    position: absolute;
    bottom: -14px;left: 51px;
    width: 0;height: 0;
    border-top: 14px solid #fff;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    transform: rotate(337deg);
}
.hand-right{
    margin-left: 100px;
    transform:translateX(-50%) rotate(40deg);
}
.hand-right::after{
    content: '';
    display: block;
    position: absolute;
    bottom: -13px;left: 29px;
    width: 0;height: 0;
    border-top: 14px solid #fff;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    transform: rotate(28deg);
}

.hand-right::before{
    content: '';
    display: block;
    position: absolute;
    bottom: -14px;left: 51px;
    width: 0;height: 0;
    border-top: 14px solid #fff;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    transform: rotate(337deg);
}
/* 手部end */
/* 腿部start */
.footer{
    position: absolute;
    left: 50%;top: 240px;
    width: 120px;height: 120px;
    transform:translateX(-50%);
    background: rgb(254,234,191);
    border: 2px solid #000;
    border-radius: 50px 50px 66px 66px;
    animation:waggle 1.8s infinite;
}
@keyframes waggle{
    0%{transform:translateX(-50%) rotate(0deg);}
    25%{transform:translateX(-50%) rotate(-20deg);}
    50%{transform:translateX(-50%) rotate(0deg);}
    75%{transform:translateX(-50%) rotate(20deg);}
    100%{transform:translateX(-50%) rotate(0deg);}
}
.footer-left{
    margin-left: -130px;
}
.footer-right{
    margin-left: 130px;
}
.footer-left::before,
.footer-left::after,
.footer-right::before,
.footer-right::after{
    content: '';
    display: block;
    position: absolute;
    width: 0;height: 0;
    border-bottom: 14px solid #fff;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
}
.footer-left::before,
.footer-right::before{
    top: -16px;left: 37px;
}
.footer-left::after,
.footer-right::after{
    top: -16px;left: 65px;
}
.arch{
    position: absolute;
    left: 50%;top: 15px;
    width: 80px;height: 80px;
    transform:translateX(-50%);
    background: rgb(161,98,68);
    border: 2px solid #000;
    border-radius: 50px 50px 66px 66px;
}
/* 腿部end */`

