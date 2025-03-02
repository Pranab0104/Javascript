var st = document.querySelector("#st");
var sp = document.querySelector("#sp");
var h3 = document.querySelector("h3");
var int;

st.addEventListener("click",function(){
    var count = 0;
    int = setInterval(function(){
        h3.textContent = count;
        count++;
    }, 1000);
})

sp.addEventListener("click",function(){
    clearInterval(int);
})