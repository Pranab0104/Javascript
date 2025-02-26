var btn = document.querySelector("button");
var p  = document.querySelector("p");

btn.addEventListener("click",function(){
    p.textContent = "Hello Master!";
    p.style.textColor="Crimson";
    p.style.fontSize= "100px";
    p.style.fontFamily = "Sans-Serif";
})