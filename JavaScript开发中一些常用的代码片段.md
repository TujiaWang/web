# JavaScript开发中一些常用的代码片段
## 返回给定数组中num的不重复数组
~~~
//从一个给定的数组arr中,随机返回num个不重复项
function getArrayItems(arr, num) {
    //新建一个数组,将传入的数组复制过来,用于运算,而不要直接操作传入的数组;
    var temp_array = new Array();
    for (var index in arr) {
        temp_array.push(arr[index]);
    }
    //取出的数值项,保存在此数组
    var return_array = new Array();
    for (var i = 0; i < num; i++) {
        //判断如果数组还有可以取出的元素,以防下标越界
        if (temp_array.length > 0) {
            //在数组中产生一个随机索引
            var arrIndex = Math.floor(Math.random() * temp_array.length);
            //将此随机索引的对应的数组元素值复制出来
            return_array[i] = temp_array[arrIndex];
            //然后删掉此索引的数组元素,这时候temp_array变为新的数组
            temp_array.splice(arrIndex, 1);
        } else {
            //数组中数据项取完后,退出循环,比如数组本来只有10项,但要求取出20项.
            break;
        }
    }
    return return_array;
}
~~~
## 格式化数字两位显示
~~~
/**
 * 将一位数格式化为两位数(09)
 */
const formatNumber = n => {
    n = n.toString()
    return n[1] ? n : '0' + n
}
~~~
## 判断对象是否为空
~~~
/**
 * 对象是否为空
 */
const isEmptyObject = obj => {
    for (var key in obj) {
        return false;
    }
    return true;
}
~~~
## 格式化金额并返回正确值
~~~
/**
 * 判断并格式化金额，只能是数字，小数只能保留两位
 */
const vailFormPrice = str => {
    str = str.replace(/[^\d.]/g, ""); //清除“数字”和“.”以外的字符  
    str = str.replace(/^\./g, ""); //验证第一个字符是数字而不是.  
    str = str.replace(/\.{2,}/g, "."); //只保留第一个. 清除多余的  
    str = str.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
    str = str.replace(/^(\-)*(\d+)\.(\d\d).*$/, '$1$2.$3'); //只能输入两个小数 
    return str;
}
~~~
## 字符串中是否有中文
~~~
/**
 * 检查字符串是否存在中文
 */
const isChinese = function(str) {
    var reg = /[\u4e00-\u9fa5]/gm;
    if (reg.test(str)) {
        console.log(str + ' 中存在中文');
        return true;
    } else {
        console.log(str + ' 中不存在中文');
        return false;
    }
}
~~~
## 是否为电话号码
~~~
/**
 * 是否为电话号码
 */
const isPhoneNum = str => {
    return /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/.test(str)
}
~~~
## 去掉字符串前后空格
~~~
/**
 * 去掉前后空格
 */
const trim = function(str) {
    var reg = /^\s+|\s+$/g;
    return str.replace(reg, '');
}
~~~
## 字符串是否为数字
~~~
/**
 * 检查字符串是否是数字
 */
const isNumber = function(str) {
    var reg = /^\d+$/;
    if (reg.test(str)) {
        console.log(str + '是数字');
        return true;
    } else {
        console.log(str + '不是数字');
        return false;
    }
}
~~~
## 获取位于两者之间的数
~~~
/**
 * 获取一个数位于num1和num2之间
 * @param  {[type]} num1 [description]
 * @param  {[type]} num2 [description]
 * @return {[type]}      [description]
 */
const getNum = (num1, num2) => {
    var c = num2 - num1 + 1;
    return Math.floor(Math.random() * c + num1);
}

//生成从minNum到maxNum的随机数
function randomNum(minNum, maxNum) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * minNum + 1, 10);
      break;
    case 2:
      return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
      break;
    default:
      return 0;
      break;
  }
}
~~~
## 平分一个数组
~~~
/*
 * 将一个数组分成几个同等长度的数组
 * array[分割的原数组]
 * size[每个子数组的长度]
 */
const sliceArray = function(array, size) {
    var result = [];
    for (var x = 0; x < Math.ceil(array.length / size); x++) {
        var start = x * size;
        var end = start + size;
        result.push(array.slice(start, end));
    }
    return result;
}
~~~
## 数组去重
~~~
function unique(arr){
    if(!isArrayLink(arr)){ //不是类数组对象
        return arr
    }
    let result = []
    let objarr = []
    let obj = Object.create(null)
    
    arr.forEach(item => {
        if(isStatic(item)){//是除了symbol外的原始数据
            let key = item + '_' + getRawType(item);
            if(!obj[key]){
                obj[key] = true
                result.push(item)
            }
        }else{//引用类型及symbol
            if(!objarr.includes(item)){
                objarr.push(item)
                result.push(item)
            }
        }
    })
    
    return resulte
}
~~~
## 将对象的key按照字典排序
~~~
/*
 * 将对象的key按字典排序
 */
const objKeySort = function(arys) {
    //先用Object内置类的keys方法获取要排序对象的属性名，再利用Array原型上的sort方法对获取的属性名进行排序，newkey是一个数组
    var newkey = Object.keys(arys).sort();
    //console.log('newkey='+newkey);
    var newObj = {}; //创建一个新的对象，用于存放排好序的键值对
    for (var i = 0; i < newkey.length; i++) {
        //遍历newkey数组
        newObj[newkey[i]] = arys[newkey[i]];
        //向新创建的对象中按照排好的顺序依次增加键值对

    }
    return newObj; //返回排好序的新对象
}
~~~
## 身份证校验
~~~
// 校验省代码
function checkProv(val) {
    var pattern = /^[1-9][0-9]/;
    var provs = {
        11: "北京",
        12: "天津",
        13: "河北",
        14: "山西",
        15: "内蒙古",
        21: "辽宁",
        22: "吉林",
        23: "黑龙江 ",
        31: "上海",
        32: "江苏",
        33: "浙江",
        34: "安徽",
        35: "福建",
        36: "江西",
        37: "山东",
        41: "河南",
        42: "湖北 ",
        43: "湖南",
        44: "广东",
        45: "广西",
        46: "海南",
        50: "重庆",
        51: "四川",
        52: "贵州",
        53: "云南",
        54: "西藏 ",
        61: "陕西",
        62: "甘肃",
        63: "青海",
        64: "宁夏",
        65: "新疆",
        71: "台湾",
        81: "香港",
        82: "澳门"
    };
    if (pattern.test(val)) {
        if (provs[val]) {
            return true;
        }
    }
    return false;
}
// 校验其他包括x
function checkCode(val) {
    var p = /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
    var factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
    var parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2];
    var code = val.substring(17);
    if (p.test(val)) {
        var sum = 0;
        for (var i = 0; i < 17; i++) {
            sum += val[i] * factor[i];
        }
        if (parity[sum % 11] == code.toUpperCase()) {
            return true;
        }
    }
    return false;
}
// 校验生日
function checkDate(val) {
    var pattern = /^(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)$/;
    if (pattern.test(val)) {
        var year = val.substring(0, 4);
        var month = val.substring(4, 6);
        var date = val.substring(6, 8);
        var date2 = new Date(year + "-" + month + "-" + date);
        if (date2 && date2.getMonth() == (parseInt(month) - 1)) {
            return true;
        }
    }
    return false;
}
// 身份证号码校验 val为身份证号
function checkID(val) {
    if (checkCode(val)) {
    var date = val.substring(6, 14);
    if (checkDate(date)) {
        if (checkProv(val.substring(0, 2))) {
        return true;
        }
    }
    }
    return false;
}
~~~
## 格式化时间
~~~
function dateFormater(formater, t){
    let date = t ? new Date(t) : new Date(),
        Y = date.getFullYear() + '',
        M = date.getMonth() + 1,
        D = date.getDate(),
        H = date.getHours(),
        m = date.getMinutes(),
        s = date.getSeconds();
    return formater.replace(/YYYY|yyyy/g,Y)
        .replace(/YY|yy/g,Y.substr(2,2))
        .replace(/MM/g,(M<10?'0':'') + M)
        .replace(/DD/g,(D<10?'0':'') + D)
        .replace(/HH|hh/g,(H<10?'0':'') + H)
        .replace(/mm/g,(m<10?'0':'') + m)
        .replace(/ss/g,(s<10?'0':'') + s)
}
// dateFormater('YYYY-MM-DD HH:mm', t) ==> 2019-06-26 18:30
// dateFormater('YYYYMMDDHHmm', t) ==> 201906261830
~~~
## 将指定字符串由一种时间格式转化为另一种
~~~
// from的格式应对应str的位置
function dateStrForma(str, from, to){
    //'20190626' 'YYYYMMDD' 'YYYY年MM月DD日'
    str += ''
    let Y = ''
    if(~(Y = from.indexOf('YYYY'))){
        Y = str.substr(Y, 4)
        to = to.replace(/YYYY|yyyy/g,Y)
    }else if(~(Y = from.indexOf('YY'))){
        Y = str.substr(Y, 2)
        to = to.replace(/YY|yy/g,Y)
    }

    let k,i
    ['M','D','H','h','m','s'].forEach(s =>{
        i = from.indexOf(s+s)
        k = ~i ? str.substr(i, 2) : ''
        to = to.replace(s+s, k)
    })
    return to
}
// dateStrForma('20190626', 'YYYYMMDD', 'YYYY年MM月DD日') ==> 2019年06月26日
// dateStrForma('121220190626', '----YYYYMMDD', 'YYYY年MM月DD日') ==> 2019年06月26日
// dateStrForma('2019年06月26日', 'YYYY年MM月DD日', 'YYYYMMDD') ==> 20190626
~~~
## 获取Url参数，返回一个对象
~~~
function GetUrlParam(){
    let url = document.location.toString();
    let arrObj = url.split("?");
    let params = Object.create(null)
    if (arrObj.length > 1){
        arrObj = arrObj[1].split("&");
        arrObj.forEach(item=>{
            item = item.split("=");
            params[item[0]] = item[1]
        })
    }
    return params;
}
// ?a=1&b=2&c=3 ==> {a: "1", b: "2", c: "3"}
~~~
## base64数据导出文件，文件下载
~~~
function downloadFile(filename, data){
    let DownloadLink = document.createElement('a');

    if ( DownloadLink ){
        document.body.appendChild(DownloadLink);
        DownloadLink.style = 'display: none';
        DownloadLink.download = filename;
        DownloadLink.href = data;

        if ( document.createEvent ){
            let DownloadEvt = document.createEvent('MouseEvents');

            DownloadEvt.initEvent('click', true, false);
            DownloadLink.dispatchEvent(DownloadEvt);
        }
        else if ( document.createEventObject )
            DownloadLink.fireEvent('onclick');
        else if (typeof DownloadLink.onclick == 'function' )
            DownloadLink.onclick();

        document.body.removeChild(DownloadLink);
    }
}
~~~
## 返回一个lower - upper之间的随机数
~~~
// lower、upper无论正负与大小，但必须是非NaN的数据
function random(lower, upper){
    lower = +lower || 0
    upper = +upper || 0
    return Math.random() * (upper - lower) + lower;
}
//random(0, 0.5) ==> 0.3567039135734613
//random(2, 1) ===> 1.6718418553475423
//random(-2, -1) ==> -1.4474325452361945
~~~
## 禁止右键、选择、复制
~~~
['contextmenu', 'selectstart', 'copy'].forEach(function(ev){
    document.addEventListener(ev, function(event){
        return event.returnValue = false
    })
});
~~~
## 禁止某些键盘事件
~~~
document.addEventListener('keydown', function(event){
    return !(
        112 == event.keyCode || //F1
        123 == event.keyCode || //F12
        event.ctrlKey && 82 == event.keyCode || //ctrl + R
        event.ctrlKey && 78 == event.keyCode || //ctrl + N
        event.shiftKey && 121 == event.keyCode || //shift + F10
        event.altKey && 115 == event.keyCode || //alt + F4
        "A" == event.srcElement.tagName && event.shiftKey //shift + 点击a标签
    ) || (event.returnValue = false)
});
~~~
## 深拷贝
~~~
let copyObj = JSON.parse(JSON.stringify(obj)) // 最简单的深拷贝对象
~~~