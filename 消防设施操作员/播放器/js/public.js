window.addEventListener("load", function () {
    var kechengtanchuang = document.querySelector("#kechengtanchuang");
    var tanchuangxianshi = document.querySelector(".tanchuangxianshi");
    var bofangqi = document.querySelector(".bofangqi");
    kechengtanchuang.onclick = function () {
        // alert("点击");
        if (tanchuangxianshi.style.display == "block") {
            tanchuangxianshi.style.display = "none";
            bofangqi.style.display = "block"

        } else {
            tanchuangxianshi.style.display = "block";
            bofangqi.style.display = "none"
        }
    };
});