let buttons=document.querySelectorAll(".but");
let input=document.querySelector(".in");
let enter_but=document.querySelector("#enter");
let del_but=document.querySelector("#del");

buttons.forEach((but)=>{
    but.addEventListener("click",()=>{
        input.value +=but.getAttribute("value");
    })
})


enter_but.addEventListener("click",()=>{
    let exp=input.value;
    input.value="ans:"+eval(exp);
})

del_but.addEventListener("click",()=>{
    input.value="";
})
