window.addEventListener("load", function () {
    var kechengtanchuang = document.querySelector("#kechengtanchuang");
    console.log(kechengtanchuang);
    var tanchuangxianshi = document.querySelector(".tanchuangxianshi");
    console.log(tanchuangxianshi);
    kechengtanchuang.onclick = function () {
        // alert("点击");
        if (tanchuangxianshi.style.display == "block") {
            tanchuangxianshi.style.display = "none";
        } else {
            tanchuangxianshi.style.display = "block";
        }
    };
});