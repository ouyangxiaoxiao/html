window.addEventListener("load", function () {
    var kcxq = document.querySelector("#kcxq");
    console.log("5555");
    var list = kcxq.querySelectorAll("li");
    console.log(list.length);
    var video = document.querySelector("video");
    var btn1 = document.querySelector("#btn1");
    var btn2 = document.querySelector("#btn2");

    nub = video.getAttribute("index");

    /*绑定点击事件，顺便添加 index*/
    for (i = 0; i < list.length; i++) {
        list[i].setAttribute("index", i);

        /*点击播放*/
        list[i].onclick = function () {
            /*判断播放的index是否大于5*/
            if (this.getAttribute("index") < 5) {
                // 给播放器赋值当前点击这个连接的
                video.setAttribute("src", this.getAttribute("value"));
                /*给播放器当前这个index*/
                video.setAttribute("index", this.getAttribute("index"));
                /*播放器播放*/
                video.play();
            } else if (i > 5) {
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

                } else {
                    alert("没注册");

                }


            }

        };

    }
// /*默认播放*/
    video.setAttribute("src", list[0].getAttribute("value"));
    video.setAttribute("index", list[0].getAttribute("index"));
    video.play();

    /*顺序播放*/
    video.addEventListener("ended", function () {
        if (nub == list.length - 1) {
            nub = 0;
        } else {
            console.log("播放完毕了");
            nub += 1;
        }
        video.setAttribute("src", list[nub].getAttribute("value"));
        video.setAttribute("index", list[nub].getAttribute("index"));

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
    };

    btn2.onclick = function () {
        if (video.getAttribute("index") == list.length - 1) {
            nub = 0;
        } else {
            nub += 1;
        }
        video.setAttribute("src", list[nub].getAttribute("value"));
        video.setAttribute("index", list[nub].getAttribute("index"));

    };
// video.onemptied = function () {
//     alert("出错");
//     video.pause();
//     zhezhaoceng.style.display = "block"
// }


    function panduan() {


        if (localStorage.getItem('phone')) {
            alert('注册了');

        } else {
            alert("没注册");

        }


    }
});