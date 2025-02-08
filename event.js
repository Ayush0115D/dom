let btn1=document.querySelector("#btn1");
// btn1.onclick = (evt)=>{
    // console.log(evt);
    // console.log(evt.type);
    // console.log(evt.target);
    // console.log(evt.clientX,evt.clientY);

    // console.log("handler1");
    // let a=25;
    // a++;
    
    // console.log(a);
// };
// btn1.onclick = ()=>{
//     console.log("handler2"); //phle wala handler kaam na krega bcoz overwrite horha
// }
btn1.addEventListener("click",(evt)=>{
    console.log("button1 was clicked handler 1");
    console.log(evt);
    console.log(evt.type);
});
btn1.addEventListener("click",()=>{
    console.log("button1 was clicked handler2"); 
});
const handler3=()=>{
    console.log("button was clicked handler3")
};
btn1.addEventListener("click",handler3)
btn1.addEventListener("click",()=>{
    console.log("button1 was clicked handler4"); 
});// it can do multiple work/task on same event

btn1.removeEventListener("click",handler3);
let div= document.querySelector("div");
div.onmouseover=(evt)=>{
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX,evt.clientY);
console.log("you are inside div");
};
//CHANGE MODE 

let modeBtn=document.querySelector("#mode");
let body=document.querySelector("body");

let currMode="light";
modeBtn.addEventListener("click",()=>{
    if(currMode==="light"){
        currMode="dark";
        body.classList.add("dark");
        body.classList.remove("light");

        // document.querySelector("body").style.backgroundColor="black";
    }else{
        currMode="light";
        body.classList.add("light");
        body.classList.remove("dark");


        // document.querySelector("body").style.backgroundColor="white";

    }
    console.log(currMode);

})

