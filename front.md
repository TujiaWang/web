# 常见前端的坑
## 设置input 文本框的 placeholder 的颜色
~~~
input::-webkit-input-placeholder{
    // 添加具体颜色值
}
~~~
## 去除ios 手机端input输入框的内阴影
~~~
input{ 
    -webkit-appearance: none; 
}
~~~
## 手机端div里面在包一层div，文字展示不居中的问题
最好设置padding ，不固定高度和不设置line-height
## iOS端input输入框光标错位
是由于fixed定位引起的，改成absolute就解决了
## iOS下取消input在输入的时候英文首字母的默认大写
~~~
<input type="text" autocapitalize="none">
~~~
## 禁止 iOS 识别长串数字为电话
~~~
<meta name="format-detection" content="telephone=no" />
~~~
## 禁止ios和android用户选中文字
~~~
-webkit-user-select: none;
~~~
