window.addEventListener("load", function () {
    var left = document.querySelector(".left");
    var right = document.querySelector(".right");
    var list = document.querySelector(".list");
    var jglf = document.querySelector("#jq_vipPriceType1");
    combined = 0;
    count = 0;
    console.log(list);
    /*下册摁钮*/
    lis = list.querySelectorAll("li");
    console.log(lis.length);
    for (i = 0; i < lis.length; i++) {
        lis[i].onclick = function () {
            /*获取价格*/
            nub = this.querySelector("i").querySelector("span").innerText;
            left.classList.add("xuanzhong");
            right.classList.remove("xuanzhong");
            console.log(left);
            console.log(555555555);


            if (this.classList.contains("xuanzhong")) {
                this.classList.remove("xuanzhong");
                /*选中加1次*/
                count -= 1;
                combined -= parseInt(nub);

            } else {
                this.classList.add("xuanzhong");
                /*选中加1次*/
                count += 1;
                console.log(parseInt(nub));
                combined += parseInt(nub);
                console.log("合计：" + combined)

            }

            /*计价*/
            jglf.innerHTML = "已选" + count + "课共计：" + combined + "元 ";

        }
    }


    /*左侧按课选择*/
    left.onclick = function () {

        if (this.classList.contains("xuanzhong")) {
            this.classList.remove("xuanzhong");
            right.classList.remove("xuanzhong");
            /*下面批量勾选*/
            for (i = 0; i < lis.length; i++) {

                lis[i].classList.remove("xuanzhong");

            }

        } else {
            this.classList.add("xuanzhong");
            this.classList.add("xuanzhong");
            right.classList.remove("xuanzhong");
            /*下面取消批量勾选*/
            for (i = 0; i < lis.length; i++) {
                lis[i].classList.remove("xuanzhong");
            }
        }

    };
    /*右侧全选*/
    right.onclick = function () {
        if (this.classList.contains("xuanzhong")) {
            this.classList.remove("xuanzhong");
            left.classList.remove("xuanzhong");
            /*下面批量勾选*/
            for (i = 0; i < lis.length; i++) {
                lis[i].classList.remove("xuanzhong");
            }

        } else {
            this.classList.add("xuanzhong");
            left.classList.remove("xuanzhong");


            /*下面批量勾选*/
            for (i = 0; i < lis.length; i++) {
                lis[i].setAttribute("class", "xuanzhong");
                console.log(this)

            }
        }
    }


});