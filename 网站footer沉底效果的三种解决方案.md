# 网站footer沉底效果的三种解决方案
通常做pc端时会有底部版权信息沉底的效果，这里记录一下目前自己知道的实现方法。
## 采用flex布局 + min-height
如果网站对兼容性没有特别要求的话，这种方式应该是最容易的了，主要就两个点一个是justify-content: space-between还有一个就是min-height:100%来实现，示例如下：
~~~
<!DOCTYPE html>
<html>
<head>
    <title></title>
    <style type="text/css">
        html, body {
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
        }
        #container {
            width: 100%;
            // 重点代码
            min-height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
        #footer {
            width: 100%;
            height: 100px;
        }
    </style>
</head>
<body>
<div id="container">
    <div id="content"> 
        content  <br>
        content  <br>
        content  <br>
        content  <br>
        content  <br>
        content  <br>
        content  <br>
        content  <br>
        content  <br>
        content  <br>
        content  <br>
        content  <br>
        content  <br>
        content  <br>
        content  <br>
        content  <br>
        content  <br>
    </div>
    <div id="footer">
        footer
    </div>
</div>
</body>
</html>
~~~
## flex + margin-top
这种方式和上面一种差不多，唯一不同就是利用margin-top的auto自动属性起作用，示例如下：
~~~
<!DOCTYPE html>
<html>
<head>
    <title></title>
    <style type="text/css">
        html, body {
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
        }
        #container {
            width: 100%;
            min-height: 100%;
            display: flex;
            flex-direction: column;
        }
        #footer {
            width: 100%;
            height: 100px;
            margin-top: auto; // 重点代码
        }
    </style>
</head>
<body>
<div id="container">
    <div id="content"> 
        content  <br>
        content  <br>
        content  <br>
        content  <br>
        content  <br>
        content  <br>
        content  <br>
        content  <br>
        content  <br>
        content  <br>
        content  <br>
        content  <br>
        content  <br>
        content  <br>
        content  <br>
        content  <br>
        content  <br>
        content  <br>
        content  <br>
        content  <br>
        content  <br>
        content  <br>
        content  <br>
        content  <br>
        content  <br>
        content  <br>
        content  <br>
        content  <br>
        content  <br>
        content  <br>
        content  <br>
        content  <br>
        content  <br>
        content  <br>
    </div>
    <div id="footer">
        footer
    </div>
</div>
</body>
</html>
~~~
## 通过js计算
这种方法主要针对需要兼容低版本浏览器的，这个就简单了直接通过js计算就可以了，示例如下：
~~~
<!DOCTYPE html>
<html>
<head>
    <title></title>
    <style type="text/css">
        html, body {
            width: 100%;
            height: 100%;
        }
        #container {
            width: 100%;
            height: 100%;
        }
        #content {
            background: blue;
        }
        #footer {
            width: 100%;
            height: 100px;
            background: red;
        }
        .footer-fixed {
            position: fixed;
            left: 0;
            bottom: 0;
        }
    </style>
</head>
<body>

<div id="container">
    <div id="content"> content </div>
    <div id="footer">
        footer
    </div>
</div>
<script type="text/javascript">
    let height = document.getElementById('container').clientHeight - document.getElementById('content').clientHeight;
    // 给footer加上class,使其固定
    if (height > 100) document.getElementById('footer').classList.add('footer-fixed');
</script>
</body>
</html>
~~~
