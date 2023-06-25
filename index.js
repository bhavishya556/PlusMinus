


let plus = document.querySelector("#plus");

plus.addEventListener("click",()=>{
    let n = document.querySelector("#counter");
    let val= parseInt(n.innerText);
    val = val +1;
    n.innerText=val;
    console.log(val)
});


let minus = document.querySelector("#minus");
minus.addEventListener("click",()=>{
    let n = document.querySelector("#counter");
    let val= parseInt(n.innerText);
    val = val -1;
    n.innerText=val;
    console.log(val)
});

