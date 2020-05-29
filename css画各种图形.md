# CSS画图
# 椭圆
~~~
.ellipsis {
    width: 200px;
    height: 120px;
    background: #8BC34A;
    border-radius: 100px/60px;
}
~~~
# 半圆
~~~
.top-semicircle {
    width: 120px;
    height: 60px;
    background: #8BC34A;
    border-radius: 60px 60px 0px 0px;
}

.right-semicircle {
    width: 60px;
    height: 120px;
    background: #8BC34A;
    border-radius: 0 60px 60px 0;
}

.bottom-semicircle {
    width: 120px;
    height: 60px;
    background: #8BC34A;
    border-radius: 0 0 60px 60px;
}

.left-semicircle {
    width: 60px;
    height: 120px;
    background: #8BC34A;
    border-radius: 60px 0 0 60px;
}
~~~
# 四分之一圆（扇形）
~~~
.toplf-sector,
.toprt-sector,
.bottomlf-sector,
.bottomrt-sector {
    width: 60px;
    height: 60px;
    background: #8BC34A;
}

.toplf-sector {
    border-radius: 60px 0 0 0;
}

.toprt-sector {
    border-radius: 0 60px 0 0;
}

.bottomlf-sector {
    border-radius: 0 0 0 60px;
}

.bottomrt-sector {
    border-radius: 0 0 60px 0;
}
~~~
# 心形
~~~
.heart-shaped {
    width: 80px;
    height: 80px;
    background: #8BC34A;
    position: relative;
    transform: rotate(45deg);
}

.heart-shaped::before {
    content: "";
    width: 40px;
    height: 80px;
    background: #8BC34A;
    border-radius: 40px 0 0 40px;
    position: absolute;
    right: 99%;
    top: 0;
}

.heart-shaped::after {
    content: "";
    width: 80px;
    height: 40px;
    background: #8BC34A;
    border-radius: 40px 40px 0 0;
    position: absolute;
    left: 0;
    bottom: 99%;
}
~~~
# 鸡蛋
~~~
.egg {
    width: 150px;
    height: 200px;
    background: #8BC34A;
    border-radius: 75px 75px 75px 75px / 130px 130px 70px 70px;
}
~~~
# 太极八卦阵图
~~~
.taiji {
    width: 140px;
    height: 70px;
    border: 2px solid #8BC34A;
    border-bottom: 70px solid #8BC34A;
    border-radius: 100%;
    position: relative;
}

.taiji::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    width: 20px;
    height: 20px;
    background: #fff;
    border: 25px solid #8BC34A;
    border-radius: 100%;
}

.taiji::after {
    content: "";
    position: absolute;
    right: 0;
    top: 50%;
    width: 20px;
    height: 20px;
    background: #8BC34A;
    border: 25px solid #fff;
    border-radius: 100%;
}
~~~
# 叶子（花瓣）
~~~
.leaf1 {
    width: 80px;
    height: 80px;
    background: #8BC34A;
    border-radius: 0 80px;
}
.leaf2 {
    width: 80px;
    height: 80px;
    background: #8BC34A;
    border-radius: 40px 40px 0 40px;
}
~~~
# 五叶花瓣
~~~
.five-flower {
    position: relative;
    width: 300px;
    height: 280px;
}

.five-flower .petal {
    display: block;
    width: 120px;
    height: 120px;
    background: #8BC34A;
    border-radius: 0 120px;
    position: absolute;
    transform-origin: 100% 100%;
}

.five-flower .petal1 {
    transform: rotate(72deg);
}

.five-flower .petal2 {
    transform: rotate(144deg);
}

.five-flower .petal3 {
    transform: rotate(216deg);
}

.five-flower .petal4 {
    transform: rotate(288deg);
}
~~~
# 牵牛花
~~~
.qiannuhua {
    position: relative;
    width: 200px;
    height: 200px;
    margin-left: 140px;
}

.qiannuhua .petal {
    display: block;
    width: 120px;
    height: 120px;
    background: #8BC34A;
    border-radius: 0 120px;
    position: absolute;
    transform-origin: 0% 100%
}

.qiannuhua .petal1 {
    transform: rotate(72deg);
}

.qiannuhua .petal2 {
    transform: rotate(144deg);
}

.qiannuhua .petal3 {
    transform: rotate(216deg);
}

.qiannuhua .petal4 {
    transform: rotate(288deg);
}
~~~
# 风车
~~~
.fengche {
    position: relative;
    width: 200px;
    height: 200px;
}

.fengche .petal {
    display: block;
    width: 120px;
    height: 120px;
    background: #8BC34A;
    border-radius: 0 120px;
    position: absolute;
    transform-origin: 30% 100%
}

.fengche .petal1 {
    transform: rotate(72deg);
}

.fengche .petal2 {
    transform: rotate(144deg);
}

.fengche .petal3 {
    transform: rotate(216deg);
}

.fengche .petal4 {
    transform: rotate(288deg);
}
~~~
# 小尾巴
~~~
.xwb1 {
    width: 20px;
    height: 30px;
    border-left: 8px solid #8BC34A;
    border-radius: 30px 0 0 0;
}
~~~
# 箭头
~~~
.xwb2 {
    width: 0;
    height: 0;
    border-bottom: 10px solid #8BC34A;
    border-left: 10px solid transparent;
    position: relative;
    transform: rotate(8deg);
}

.xwb2::after {
    content: "";
    width: 20px;
    height: 18px;
    border-right: 5px solid #8BC34A;
    border-radius: 0px 40px 0 0;
    position: absolute;
    left: -30px;
    bottom: -15px;
    transform: rotate(-45deg);
}
~~~
# 月亮
~~~
moon {
    width: 80px;
    height: 120px;
    border-left: 40px solid #8BC34A;
    border-radius: 60px;
}
~~~
# 三角形
~~~
.triangle-bot {
    width: 0;
    height: 0;
    border: 40px solid transparent;
    border-bottom-color: #8BC34A;
}

.triangle-top {
    width: 0;
    height: 0;
    border: 40px solid transparent;
    border-top-color: #8BC34A;
}

.triangle-lf {
    width: 0;
    height: 0;
    border: 40px solid transparent;
    border-left-color: #8BC34A;
}

.triangle-rt {
    width: 0;
    height: 0;
    border: 40px solid transparent;
    border-right-color: #8BC34A;
}
----------------------------------------
.triangle-toplf,
.triangle-toprt,
.triangle-bottomlf,
.triangle-bottomrt {
    width: 0;
    height: 0;
}

.triangle-toplf {
    border-top: 120px solid #8BC34A;
    border-right: 120px solid transparent;
}

.triangle-toprt {
    border-top: 120px solid #8BC34A;
    border-left: 120px solid transparent;
}

.triangle-bottomlf {
    border-bottom: 120px solid #8BC34A;
    border-right: 120px solid transparent;
}

.triangle-bottomrt {
    border-bottom: 120px solid #8BC34A;
    border-left: 120px solid transparent;
}
-------------------------------------
.triangle1 {
    border-bottom: 120px solid #8BC34A;
    border-right: 60px solid transparent;
}

.triangle2 {
    border-top: 120px solid #8BC34A;
    border-left: 60px solid transparent;
}

.triangle3 {
    border-top: 60px solid #8BC34A;
    border-right: 120px solid transparent;
}

.triangle4 {
    border-top: 60px solid #8BC34A;
    border-left: 120px solid transparent;
}
------------------------------------------------
.triangle5 {
    border-top: 80px solid #8BC34A;
    border-left: 40px solid transparent;
    border-right: 40px solid transparent;
}
~~~
# 梯形
~~~
.tixing1 {
    border-bottom: 100px solid #8BC34A;
    border-left: 60px solid transparent;
    border-right: 60px solid transparent;
    width: 100px;
    height: 0;
}
------------------------------
.tixing2 {
    border-bottom: 120px solid #8BC34A;
    border-right: 120px solid transparent;
    width: 80px;
}
~~~
# 边框对话框
~~~
.duihuakuang {
    width: 200px;
    height: 100px;
    border: 2px solid #8BC34A;
    border-radius: 6px;
    position: relative;
}

.duihuakuang::before {
    content: "";
    width: 20px;
    height: 20px;
    background: #fff;
    border-right: 2px solid #8BC34A;
    border-bottom: 2px solid #8BC34A;
    position: absolute;
    left: 30%;
    top: 100%;
    transform: rotate(45deg);
    margin-top: -10px;
}
~~~
# 锁
~~~
.suo {
    width: 200px;
    height: 160px;
    background: #8BC34A;
    border-radius: 30px;
    position: relative;
}
/*锁孔*/
.suo::before {
    content: "";
    width: 25px;
    height: 50px;
    background: #fff;
    position: absolute;
    left: 50%;
    top: 50%;
    border-radius: 25px;
    transform: translate(-50%, -50%);
}
/*锁把*/
.suo::after {
    content: "";
    width: 80px;
    height: 70px;
    border: 20px solid #8BC34A;
    background: #fff;
    border-radius: 60px 60px 0 0;
    position: absolute;
    left: 50%;
    bottom: 89%;
    transform: translateX(-50%);
}
~~~

