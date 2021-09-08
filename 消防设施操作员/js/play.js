window.addEventListener('load', function () {
    /*获取视频*/
    var video = document.getElementById('video');
    // 获取列表
    var kcxq = document.querySelector('.kcxq');
    /*精准获取 lis下 每一条li*/
    var lis = kcxq.getElementsByTagName('li');

    // 获取上一曲按键
    var btn1 = document.querySelector('.btn-1');
    //获取下一曲按键
    var btn2 = document.querySelector('.btn-2');

    // 初始化index
    index = 0;
    // 默认播放第一条
    video.src = lis[index].getAttribute("value");
    lis[index].style.backgroundColor = "#f8ffe9";
    lis[index].style.color = '#70a401';
    /*给每条li绑定点击事件*/
    for (i = 0; i < lis.length; i++) {
        lis[i].setAttribute('index', i);
        /*添加自定义属性*/
        lis[i].setAttribute('class', "weibofang");
        lis[i].onclick = function () {
            console.log('点击了');
            video.src = this.getAttribute("value");
            console.log(this.getAttribute("value"));


            /*1.先去掉所有元素的样式*/
            for (var i = 0; i < lis.length; i++) {
                lis[i].style.backgroundColor = "";
                lis[i].style.color = '';
                lis[i].setAttribute('class', "weibofang");

            }
            /*留下当前li 设置选中样式*/

            this.style.backgroundColor = "#f8ffe9";
            console.log(this.getAttribute("index"));
            this.setAttribute('class', "bofang");
            this.style.color = '#70a401';

            /*获得当前这个li 的索引号给index*/
            index = Number(this.getAttribute('index'));

            // window.scroll(800, this.offsetTop);


        };

        lis[index].setAttribute('class', "bofang");

    }


    /*下一曲*/
    btn2.addEventListener('click', function () {
        if (index === lis.length - 1) {
            index += 1;
            index = 0;
            video.src = lis[index].getAttribute("value");
            console.log(index);
            /*1.先去掉所有元素的样式*/
            for (var i = 0; i < lis.length; i++) {
                lis[i].style.backgroundColor = "";
                lis[i].style.color = '';
                lis[i].setAttribute('class', "weibofang");
            }

            lis[index].style.backgroundColor = "#f8ffe9";
            lis[index].style.color = '#70a401';
            lis[index].setAttribute('class', "bofang");


        } else {
            index += 1;
            video.src = lis[index].getAttribute("value");
            console.log(index);
            for (var i = 0; i < lis.length; i++) {
                lis[i].style.backgroundColor = "";
                lis[i].style.color = '';
                lis[i].setAttribute('class', "weibofang");

            }

            lis[index].style.backgroundColor = "#f8ffe9";
            lis[index].style.color = '#70a401';
            lis[index].setAttribute('class', "bofang");

        }


    });
    /*上一曲*/
    btn1.addEventListener('click', function () {
        if (index === 0) {
            index -= 1;
            index = lis.length - 1;
            video.src = lis[index].getAttribute("value");
            console.log(index);
            /*先去掉*/
            for (var i = 0; i < lis.length; i++) {
                lis[i].style.backgroundColor = "";
                lis[i].style.color = '';
                lis[i].setAttribute('class', "weibofang");
            }

            lis[index].style.backgroundColor = "#f8ffe9";
            lis[index].style.color = '#70a401';
            lis[index].setAttribute('class', "bofang");

        } else {
            index -= 1;
            video.src = lis[index].getAttribute("value");
            console.log(index);
            /*先去掉*/
            for (var i = 0; i < lis.length; i++) {
                lis[i].style.backgroundColor = "";
                lis[i].style.color = '';
                lis[i].setAttribute('class', "weibofang");
            }

            lis[index].style.backgroundColor = "#f8ffe9";
            lis[index].style.color = '#70a401';
            lis[index].setAttribute('class', "bofang");
        }


    });
    /*自动播放下一课*/
    video.addEventListener('ended', function () {
        console.log("自动播放开始工作");
        if (index === lis.length - 1) {
            index += 1;
            index = 0;
            video.src = lis[index].getAttribute("value");
            console.log(index);
            /*1.先去掉所有元素的样式*/
            for (var k = 0; k < lis.length; k++) {
                lis[index].style.backgroundColor = "red";
                lis[k].style.color = 'red';
                lis[k].setAttribute('class', "weibofang");
            }

            lis[index].style.backgroundColor = "#f8ffe9";
            lis[index].style.color = '#70a401';
            lis[index].setAttribute('class', "bofang");

        } else {
            index += 1;
            video.src = lis[index].getAttribute("value");
            console.log(index);
            lis[index].setAttribute('class', "bofang");

            /*先去掉*/
            for (var i = 0; i < lis.length; i++) {
                lis[i].style.backgroundColor = "";
                lis[i].style.color = '';
                lis[i].setAttribute('class', "weibofang");
            }

            lis[index].style.backgroundColor = "#f8ffe9";
            lis[index].style.color = '#70a401';
            lis[index].setAttribute('class', "bofang");
        }


    });


    /*判断是否登录*/

    /*判断是否包含手机号*/
    if (localStorage.getItem('phone')) {


    } else {
        // console.log(result["13163122085"]);
        // console.log(555555555);
        console.log(lis.length);
        /*从第5个开始干掉mp4 连接*/
        for (i = 5; i <= lis.length; i++) {
            // console.log(lis[i]);
            // console.log(lis[i].index);
            lis[i].setAttribute("value", "登录");
            // lis[i].value =  "登录";
            // console.log(55555)

        }


    }
});


function myFunction() {
    var zhezhaoceng = document.querySelector(".zhezhaoceng");
    /*视频加载时候判断是否是前5个*/
    if (index >= 5) {
        // 如果是超出5个，判断是否是会员
        if (localStorage.getItem('phone')) {

        } else {
            /*不是会员就不让看*/
            console.log(zhezhaoceng);
            console.log(zhezhaoceng.style.display);
            // video.pause();
            // video.style.display = "none";
            zhezhaoceng.style.display = "block";

        }

    } else {
        zhezhaoceng.style.display = "none";
        // video.style.display = "block";
    }


}