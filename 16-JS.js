// To handle single inputs into a form.

// var form = document.querySelector("form");
// var input1 = document.querySelector("#inp1");
// var input2 = document.querySelector("#inp2");
// var input3 = document.querySelector("#inp3");
// var err = document.querySelector("h3");

// form.addEventListener("submit",function(e){
//     e.preventDefault();
//     if(input1.value === '' ||  input2.value === '' || input3.value === ''){
//         // alert("Your Details are not filled!")
//         err.textContent = "error some fields are blank!";
//         err.style.color = "red";
//         err.style.fontSize = "25px";
//     }
//     else{
//         err.textContent = '';
//         err.style.color = "black";
//         // err.style.fontSize = "25px";
//     }
// });

// To Handle Multiple inputs in a single way into a form.
var form = document.querySelector("form");
var inps = document.querySelectorAll('input[type="text"]');
var err = document.querySelector("h3");

form.addEventListener("submit",function(e){
    e.preventDefault();
    for(var i=0; i<inps.length; i++){
        if(inps[i].value.trim() === ''){
            err.textContent= "Error! some fields are empty."
            err.style.color =  "crimson";
            err.style.fontSize = "50px";
            break;
        }
    }
}); 