//
// button.onclick = function () {
//     /*判断是注册成功的*/
//     if (result.hasOwnProperty(input.value)) {
//         // console.log(input.value);
//         // 存储这元素 是这个值
//         localStorage.setItem('phone', input.value);
//         /*打印本地这个值*/
//         console.log(localStorage.getItem('phone'));
//         console.log('666666666');
//         console.log(result);
//         alert('正确');
//         window.history.back();
//
//     } else {
//         alert("您还没有注册")
//     }
// };
//


window.addEventListener('load', function () {

    /*获取json数据*/
    $.fn.data = function () {
        /*定义接收数据*/
        var result;
        $.ajax({
            // url: "https://ouyangxiaoxiao.github.io/wangye/a.json",    //请求的url地址
            url: "json/a.json",    //请求的url地址
            dataType: "json",   //返回格式为json
            type: "get",
            async: false,
            success: function (data) {
                console.log(typeof (data));
                // 返回数据
                result = data;
            }
        });

        return result

    };


    /*函数外接收数据*/
    var result = $().data();
    /*获取4个页面显示的状态*/
    namexianshi = document.getElementById("namexianshi");
    huanyingxianshi = document.querySelector(".huanyingxianshi");
    dengluxianshi = document.querySelector(".dengluxianshi");
    zhucexianshi = document.querySelector(".zhucexianshi");

    /*判断是否登录*/
    if (result.hasOwnProperty(localStorage.getItem('phone'))) {
        // console.log(input.value);
        // 存储这元素 是这个值
        // localStorage.setItem('phone', input.value);
        /*打印本地这个值*/
        console.log('666666666');
        console.log(result);
        /*把本地存储的手机号 查询联网 得到的结果 赋值给phone*/
        // phone = (localStorage.getItem('phone'));
        // 得到名字
        huanyingxianshi.style.display = "block";
        nickname = (result[localStorage.getItem('phone')].nickname);
        phone = (result[localStorage.getItem('phone')].phone);
        // alert('正确');
        namexianshi.innerHTML = (nickname + phone);


        /*退出功能*/
        tuichu = document.querySelector(".tuichu");
        tuichu.onclick = function () {
            localStorage.removeItem('phone');
            alert("您确认退出吗？");
            // 刷新页面;
           location.reload();
        };
        // // 刷新页面;
        // window.history.back();


    } else {
        // huanyingxianshi.style.display = 'none';
        dengluxianshi.style.display = "block";


        /*获取确认摁钮*/
        denglu = document.querySelector("#denglu");


        denglu.onclick = function () {
            /*获取输入的手机号*/
            input = document.getElementById("input");
            console.log(input.value);
            console.log(55555555);
            console.log(result);

            /*判断是注册成功的*/
            if (result.hasOwnProperty(input.value)) {
                // 存储这元素 是这个值
                localStorage.setItem('phone', input.value);
                /*打印本地这个值*/
                console.log(localStorage.getItem('phone'));
                console.log('666666666');
                console.log(result);
                /*隐藏注册页面*/
                zhucexianshi.style.display = "none";
                // alert('正确');
                /*登录正确就刷新页面*/
                window.history.go();

            } else {
                // zhuceanniu = document.getElementById("zhuceanniu");
                // zhuceanniu.onclick = function () {
                alert("您还没有注册");
                //     // dengluxianshi.style.display = "none";
                // };

            }


        };
        /*注册功能*/
        zhuceanniu = document.getElementById("zhuceanniu");
        zhuceanniu.onclick = function () {
            // alert("马上注册");
            dengluxianshi.style.display = "none";
            zhucexianshi.style.display = "block";
        };


    }
});