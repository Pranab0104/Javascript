var add = document.querySelector("#add");
var remove = document.querySelector("#remove");
var inp = document.querySelector("input");
var ul = document.querySelector('ul');
var li;

add.addEventListener("click",function(e){
    e.preventDefault();
    li = document.createElement("li");
    if(inp.value.trim() === ''){}
    else{
        li.textContent = inp.value;
        ul.appendChild(li);
        inp.value = '';
    }
})

remove.addEventListener("click",function(){
    ul.removeChild(li);
})
