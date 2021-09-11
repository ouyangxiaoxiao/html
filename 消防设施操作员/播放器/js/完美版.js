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
        }
        /*点击事件*/
        for (i = 0; i < list.length; i++) {
            /*点击播放*/
            list[i].onclick = function () {
                nub = this.getAttribute("index");
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
                    video.style.display = "block";
                    zhezhaoceng.style.display = "none";
                } else {
                    // alert("判断是否登录");
                    if (localStorage.getItem('phone')) {
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
            }
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
                // alert("判断是否登录");
                if (localStorage.getItem('phone')) {
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
                    video.style.display = "block";
                    zhezhaoceng.style.display = "none";
                } else {
                    // alert("没登录不让看");
                    video.setAttribute("index", list[nub].getAttribute("index"));
                    video.pause();
                    video.style.display = "none";
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

                if (nub < 5) {
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
                    // alert("判断是否登录");
                    if (localStorage.getItem('phone')) {
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
                        video.style.display = "block";
                        zhezhaoceng.style.display = "none";
                    } else {
                        // alert("没登录不让看");
                        video.setAttribute("index", list[nub].getAttribute("index"));
                        video.pause();
                        video.style.display = "none";
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

                    }

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
                // alert("判断是否登录");
                if (localStorage.getItem('phone')) {
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
                    video.style.display = "block";
                    zhezhaoceng.style.display = "none";
                } else {
                    // alert("没登录不让看");
                    video.setAttribute("index", list[nub].getAttribute("index"));
                    video.pause();
                    video.style.display = "none";
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

                }

            }

        };

    }
)
;