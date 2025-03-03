var hm = document.querySelector("#hm");
var at = document.querySelector("#at");
var pt = document.querySelector("#pt");
var ct = document.querySelector("#ct");

var H = document.querySelector("#Htext");
var A = document.querySelector("#Abtext");
var P = document.querySelector("#Ptext");
var C = document.querySelector("#Cttext");

H.style.display="block";
H.style.width="50%";

hm.addEventListener("click",function(e){
    e.preventDefault();
    clearalltext();
    H.style.display="block";
    H.style.width="50%";
})

at.addEventListener("click",function(e){
    e.preventDefault();
    clearalltext();
    A.style.display="block";
    A.style.width="50%";
})

pt.addEventListener("click",function(e){
    e.preventDefault();
    clearalltext();
    P.style.display="block";
    P.style.width="50%";
})

ct.addEventListener("click",function(e){
    e.preventDefault();
    clearalltext();
    C.style.display="block";
    C.style.width="50%";
})

function clearalltext(){
    document.querySelectorAll("h3").forEach(function(h3){
        h3.style.display ="none";
    })
}