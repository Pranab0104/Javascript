let inc = document.querySelector('#in');
let decr = document.querySelector('#decr');
let h = document.querySelector('h1');

let a = 0;

inc.addEventListener('click', function(){
    a++;
    h.innerHTML = a;
});

decr.addEventListener('click', function(){
    a--;
    h.innerHTML = a;
})