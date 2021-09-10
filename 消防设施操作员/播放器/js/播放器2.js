window.addEventListener("load", function () {
    var kcxq = document.querySelector("#kcxq");
    console.log("5555");
    var list = kcxq.querySelectorAll("li");
    console.log(list.length);
    var video = document.querySelector("#video");
    var btn1 = document.querySelector("#btn1");
    var btn2 = document.querySelector("#btn2");
    var zhezhaoceng = document.querySelector("#zhezhaoceng");
    var nub = video.getAttribute("index");

    if (localStorage.getItem('phone')) {
        /*绑定点击事件，顺便添加 index*/
        for (i = 0; i < list.length; i++) {
            list[i].setAttribute("index", i);
            list[i].setAttribute('class', "weibofang");

            /*点击播放*/
            list[i].onclick = function () {
                for (var i = 0; i < list.length; i++) {
                    // 给播放器赋值当前点击这个连接的
                    video.setAttribute("src", this.getAttribute("value"));
                    /*给播放器当前这个index*/
                    video.setAttribute("index", this.getAttribute("index"));
                    /*1.先去掉所有元素的样式*/
                    list[i].style.backgroundColor = "";
                    list[i].style.color = '';
                    list[i].setAttribute('class', "weibofang");
                }

                /*留下当前li 设置选中样式*/
                this.style.backgroundColor = "#f8ffe9";
                console.log(this.getAttribute("index"));
                this.setAttribute('class', "bofang");
                this.style.color = '#70a401';
            };

        }

        // /*默认播放*/
        video.setAttribute("src", list[0].getAttribute("value"));
        video.setAttribute("index", list[0].getAttribute("index"));
        video.play();
        /*留下当前li 设置选中样式*/
        list[0].style.backgroundColor = "#f8ffe9";
        list[0].setAttribute('class', "bofang");
        list[0].style.color = '#70a401';
        /*顺序播放*/
        video.addEventListener("ended", function () {
            if (nub == list.length - 1) {
                nub = 0;
            } else {
                nub += 1;
            }
            video.setAttribute("src", list[nub].getAttribute("value"));
            video.setAttribute("index", list[nub].getAttribute("index"));

            for (var i = 0; i < list.length; i++) {
                /*1.先去掉所有元素的样式*/
                list[i].style.backgroundColor = "";
                list[i].style.color = '';
                list[i].setAttribute('class', "weibofang");
            }

            /*留下当前li 设置选中样式*/
            list[nub].style.backgroundColor = "#f8ffe9";
            list[nub].setAttribute('class', "bofang");
            list[nub].style.color = '#70a401';
        });


        /*上一曲下一曲*/
        btn1.onclick = function () {
            // alert("点击了上一曲");
            if (video.getAttribute("index") == 0) {
                nub = list.length - 1;
            } else {
                nub -= 1;
            }
            // console.log(nub);
            video.setAttribute("src", list[nub].getAttribute("value"));
            video.setAttribute("index", list[nub].getAttribute("index"));
            for (var i = 0; i < list.length; i++) {
                /*1.先去掉所有元素的样式*/
                list[i].style.backgroundColor = "";
                list[i].style.color = '';
                list[i].setAttribute('class', "weibofang");
            }

            /*留下当前li 设置选中样式*/
            list[nub].style.backgroundColor = "#f8ffe9";
            console.log(this.getAttribute("index"));
            list[nub].setAttribute('class', "bofang");
            list[nub].style.color = '#70a401';
        };

        btn2.onclick = function () {
            if (video.getAttribute("index") == list.length - 1) {
                nub = 0;
            } else {
                nub += 1;
            }
            video.setAttribute("src", list[nub].getAttribute("value"));
            video.setAttribute("index", list[nub].getAttribute("index"));
            for (var i = 0; i < list.length; i++) {
                /*1.先去掉所有元素的样式*/
                list[i].style.backgroundColor = "";
                list[i].style.color = '';
                list[i].setAttribute('class', "weibofang");
            }

            /*留下当前li 设置选中样式*/
            list[nub].style.backgroundColor = "#f8ffe9";
            console.log(this.getAttribute("index"));
            list[nub].setAttribute('class', "bofang");
            list[nub].style.color = '#70a401';

        };
    } else {
        alert("没登录");
        /*绑定点击事件，顺便添加 index*/
        for (i = 0; i < list.length; i++) {
            list[i].setAttribute("index", i);
            list[i].setAttribute('class', "weibofang");

            /*点击播放*/
            list[i].onclick = function () {
                for (var i = 0; i < list.length; i++) {
                    // 给播放器赋值当前点击这个连接的
                    video.setAttribute("src", this.getAttribute("value"));
                    /*给播放器当前这个index*/
                    video.setAttribute("index", this.getAttribute("index"));
                    /*1.先去掉所有元素的样式*/
                    list[i].style.backgroundColor = "";
                    list[i].style.color = '';
                    list[i].setAttribute('class', "weibofang");
                    zhezhaoceng.style.display = "none";
                }
                if (this.getAttribute("index") < 5) {
                    /*留下当前li 设置选中样式*/
                    this.style.backgroundColor = "#f8ffe9";
                    console.log(this.getAttribute("index"));
                    this.setAttribute('class', "bofang");
                    this.style.color = '#70a401';
                }else {

                    zhezhaoceng.style.display = "block";
                    video.pause();
                    // alert("您需要登录");
                }

            };

        }


    }

})
;