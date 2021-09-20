window.addEventListener("load", function () {
    var left = document.querySelector(".left");
    var right = document.querySelector(".right");
    var list = document.querySelector(".list");
    var jglf = document.querySelector("#jq_vipPriceType1");


    console.log(list);
    /*下册摁钮*/
    lis = list.querySelectorAll("li");
    console.log(lis.length);
    for (i = 0; i < lis.length; i++) {
        lis[i].onclick = function () {
            right.classList.remove("xuanzhong");
            left.classList.add("xuanzhong");
            if (this.classList.contains("xuanzhong")) {
                this.classList.remove("xuanzhong");
            } else {
                this.classList.add("xuanzhong");
            }
            combined = 0;
            count = 0;
            for (i = 0; i < lis.length; i++) {
                if (lis[i].classList.contains("xuanzhong")) {
                    nub = lis[i].querySelector("i").querySelector("span").innerText;
                    combined += parseInt(nub);
                    count += 1;
                    console.log(combined);
                }
            }
            /*计价*/
            jglf.innerHTML = "已选" + count + "课共计：" + combined + "元 ";

        }
    }


    /*左侧按课选择*/
    left.onclick = function () {
        combined = 0;
        count = 0;
        for (i = 0; i < lis.length; i++) {
            if (lis[i].classList.contains("xuanzhong")) {
                nub = lis[i].querySelector("i").querySelector("span").innerText;
                combined += parseInt(nub);
                count += 1;
                console.log(combined);
            }
        }

        /*计价*/
        jglf.innerHTML = "已选" + count + "课共计：" + combined + "元 ";

        if (this.classList.contains("xuanzhong")) {
            this.classList.remove("xuanzhong");
            right.classList.remove("xuanzhong");

        } else {
            this.classList.add("xuanzhong");
            this.classList.add("xuanzhong");
            right.classList.remove("xuanzhong");

        }

    };
    /*右侧全选*/
    right.onclick = function () {
        /*计价*/
        jglf.innerHTML = "已选" + 0 + "课共计：" + 0 + "元 ";
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