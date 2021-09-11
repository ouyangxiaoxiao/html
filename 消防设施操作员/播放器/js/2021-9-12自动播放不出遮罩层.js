window.addEventListener("load", function () {
        var kcxq = document.querySelector("#kcxq");
        console.log("5555");
        var list = kcxq.querySelectorAll("li");
        console.log(list.length);
        var video = document.querySelector("video");
        var btn1 = document.querySelector("#btn1");
        var btn2 = document.querySelector("#btn2");
        var zhezhaoceng = document.querySelector("#zhezhaoceng");

        nub = video.getAttribute("index");

        /*绑定点击事件，顺便添加 index*/
        for (i = 0; i < list.length; i++) {
            list[i].setAttribute("index", i);

            /*点击播放*/
            list[i].onclick = function () {


                /*1.先去掉所有元素的样式*/
                for (var i = 0; i < list.length; i++) {
                    list[i].style.backgroundColor = "";
                    list[i].style.color = '';
                    list[i].setAttribute('class', "weibofang");

                }
                /*留下当前li 设置选中样式*/

                this.style.backgroundColor = "#f8ffe9";
                this.setAttribute('class', "bofang");
                this.style.color = '#70a401';

                /*判断播放的index是否大于5*/
                if (this.getAttribute("index") < 5) {
                    // 给播放器赋值当前点击这个连接的
                    video.setAttribute("src", this.getAttribute("value"));
                    /*给播放器当前这个index*/
                    video.setAttribute("index", this.getAttribute("index"));
                    /*去掉遮罩层*/
                    zhezhaoceng.style.display = "none";
                    /*播放器播放*/
                    video.play();

                } else {
                    // 暂停播放器
                    video.pause();
                    // alert("大于5了");
                    // 调用是否注册会员
                    if (localStorage.getItem('phone')) {

                        // alert('注册了');


                        // 给播放器赋值当前点击这个连接的
                        video.setAttribute("src", this.getAttribute("value"));
                        /*给播放器当前这个index*/
                        video.setAttribute("index", this.getAttribute("index"));
                        /*播放器播放*/
                        video.play();
                        /*去掉遮罩层*/
                        zhezhaoceng.style.display = "none";


                    } else {
                        // alert("没注册");
                        /*给播放器当前这个index*/
                        video.setAttribute("index", this.getAttribute("index"));
                        // 播放器暂停
                        video.pause();
                        /*遮罩层出现*/
                        zhezhaoceng.style.display = "block";


                    }


                }

            };

        }

// /*默认播放*/
        // alert("准备自动播放");
        video.setAttribute("src", list[0].getAttribute("value"));
        video.setAttribute("index", list[0].getAttribute("index"));
        // video.volume = 0;
        video.play();
        //  video.volume = 0.5;

        /*留下当前li 设置选中样式*/
        list[0].style.backgroundColor = "#f8ffe9";
        list[0].setAttribute('class', "bofang");
        list[0].style.color = '#70a401';
        /*顺序播放*/

        video.addEventListener("ended", function () {
            nub = parseInt(video.getAttribute("index"));

            if (video.getAttribute("index") == list.length - 1) {
                nub = 0;
            } else {
                nub += 1;
            }
            if (nub < 5) {
                // console.log(nub);
                video.setAttribute("src", list[nub].getAttribute("value"));
                video.setAttribute("index", list[nub].getAttribute("index"));
                for (i = 0; i < list.length; i++) {
                    /*1.先去掉所有元素的样式*/
                    list[i].style.backgroundColor = "";
                    list[i].style.color = '';
                    list[i].setAttribute('class', "weibofang");
                }

                /*留下当前li 设置选中样式*/
                list[nub].style.backgroundColor = "#f8ffe9";
                list[nub].setAttribute('class', "bofang");
                list[nub].style.color = '#70a401';
                zhezhaoceng.style.display = "none";
            } else {
                // alert("判断是否登录");
                if (localStorage.getItem('phone')) {
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
                    list[nub].setAttribute('class', "bofang");
                    list[nub].style.color = '#70a401';
                    zhezhaoceng.style.display = "none";
                } else {
                    // alert("没登录不让看");
                    video.setAttribute("index", list[nub].getAttribute("index"));
                    video.pause();
                    zhezhaoceng.style.display = "block";
                    for (i = 0; i < list.length; i++) {
                        /*1.先去掉所有元素的样式*/
                        list[i].style.backgroundColor = "";
                        list[i].style.color = '';
                        list[i].setAttribute('class', "weibofang");
                    }

                    /*留下当前li 设置选中样式*/
                    list[nub].style.backgroundColor = "#f8ffe9";
                    list[nub].setAttribute('class', "bofang");
                    list[nub].style.color = '#70a401';
                    video.pause();
                    zhezhaoceng.style.display = "block";
                }

            }

        });


        /*上一曲*/
        btn1.onclick = function () {
            nub = parseInt(video.getAttribute("index"));
            // alert("点击了上一曲");
            if (video.getAttribute("index") == 0) {
                nub = list.length - 1;
            } else {
                nub -= 1;
            }

            if (nub < 5) {
                console.log(nub);
                video.setAttribute("src", list[nub].getAttribute("value"));
                video.setAttribute("index", list[nub].getAttribute("index"));
                for (i = 0; i < list.length; i++) {
                    /*1.先去掉所有元素的样式*/
                    list[i].style.backgroundColor = "";
                    list[i].style.color = '';
                    list[i].setAttribute('class', "weibofang");
                }

                /*留下当前li 设置选中样式*/
                list[nub].style.backgroundColor = "#f8ffe9";
                list[nub].setAttribute('class', "bofang");
                list[nub].style.color = '#70a401';
                video.style.display = "block";
                zhezhaoceng.style.display = "none";
            } else {
                /*大于5就判断是否登录*/

                if (localStorage.getItem('phone')) {
                    video.setAttribute("src", list[nub].getAttribute("value"));
                    video.setAttribute("index", list[nub].getAttribute("index"));
                    for (i = 0; i < list.length; i++) {
                        /*1.先去掉所有元素的样式*/
                        list[i].style.backgroundColor = "";
                        list[i].style.color = '';
                        list[i].setAttribute('class', "weibofang");

                    }

                    /*留下当前li 设置选中样式*/
                    list[nub].style.backgroundColor = "#f8ffe9";
                    list[nub].setAttribute('class', "bofang");
                    list[nub].style.color = '#70a401';
                    video.style.display = "block";
                    zhezhaoceng.style.display = "none";
                } else {
                    // alert("没注册");
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
                    video.style.display = "none";
                    zhezhaoceng.style.display = "block";
                    video.pause();
                }
            }

        };


        /*下一曲*/
        btn2.onclick = function () {
            nub = parseInt(video.getAttribute("index"));

            if (video.getAttribute("index") == list.length - 1) {
                nub = 0;
            } else {
                nub += 1;
            }
            if (nub < 5) {
                // console.log(nub);
                video.setAttribute("src", list[nub].getAttribute("value"));
                video.setAttribute("index", list[nub].getAttribute("index"));
                for ( i = 0; i < list.length; i++) {
                    /*1.先去掉所有元素的样式*/
                    list[i].style.backgroundColor = "";
                    list[i].style.color = '';
                    list[i].setAttribute('class', "weibofang");
                }

                /*留下当前li 设置选中样式*/
                list[nub].style.backgroundColor = "#f8ffe9";
                list[nub].setAttribute('class', "bofang");
                list[nub].style.color = '#70a401';
                video.style.display = "block";
                zhezhaoceng.style.display = "none";
            } else {
                // alert("判断是否登录");
                if (localStorage.getItem('phone')) {
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
                    list[nub].setAttribute('class', "bofang");
                    list[nub].style.color = '#70a401';
                    video.style.display = "block";
                    zhezhaoceng.style.display = "none";
                } else {
                    // alert("没登录不让看");
                    video.setAttribute("index", list[nub].getAttribute("index"));
                    video.pause();
                    video.style.display = "none";
                    zhezhaoceng.style.display = "block";
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

                }

            }

        };

    }
)
;