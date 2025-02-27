var img1 = document.querySelector("#one");
var img2 = document.querySelector("#two");

document.querySelector("button")
.addEventListener("click",function(){
    var src1 = img1.src;
    var src2 = img2.src;

    img1.src = src2;
    img2.src = src1;
    
    img1.style.border = "5px solid black";
    img2.style.border = "5px solid Crimson";
});

var img3 = document.querySelector("#three");
var img4 = document.querySelector("#four");

document.querySelector("button")
.addEventListener("click",function(){
    var src3 = img3.src;
    var src4 = img4.src;

    img3.src = src4;
    img4.src = src3;

    img3.style.border = "5px solid black";
    img4.style.border = "5px solid Crimson";
});
