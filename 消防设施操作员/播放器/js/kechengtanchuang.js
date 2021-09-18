window.addEventListener("load", function () {
    var h3 = document.querySelectorAll("h3");
    var h3body = document.querySelectorAll(".h3");

    var h4 = document.querySelectorAll("h4");
    var h4body = document.querySelectorAll(".h4");
    console.log(h3.length);
    for (i = 0; i < h3.length; i++) {
        h3[i].setAttribute("index", i);
        h3body[i].style.display = "none";


        h3[i].onclick = function () {


            if (h3body[this.getAttribute("index")].style.display == "none") {
                for (i = 0; i < h3.length; i++) {
                    h3body[i].style.display = "none";
                }
                h3body[this.getAttribute("index")].style.display = "block";
            } else {
                h3body[this.getAttribute("index")].style.display = "none";
            }


        };

    }
    for (i = 0; i < h4.length; i++) {
        h4[i].setAttribute("index", i);
        h4[i].onclick = function () {
            if (h4body[this.getAttribute("index")].style.display == "block") {
                h4body[this.getAttribute("index")].style.display = "none";
            } else {
                h4body[this.getAttribute("index")].style.display = "block";
            }
        };
    }
});