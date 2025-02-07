// let div =document.querySelector("div");
// console.log(div);
// let id=div.getAttribute("id");
// console.log(id);
// let name=div.getAttribute("name");
// // console.log(name);
// let para=document.querySelector("p");
// console.log(para.getAttribute("class","newclass")); // elements me change hojata..console me show na hota
// // let div =document.querySelector("div");
// div.style.backgroundColor="green";
// div.style.fontSize="25px";
// div.innerText="helloo";
// div.style.visibility="hidden";
//ABOVE ARE ATTRIBUTES FOR HTML AND FOR STYLING
let newBtn=document.createElement("button");
newBtn.innerText="click me!";
console.log(newBtn);
// let div=document.querySelector("div");
// div.append(newBtn);
// div.before(newBtn);
 let p=document.querySelector("p");
p.after(newBtn);
// INSERTION AND DELETION OF ELEMENTS
let newHeading =document.createElement("h1");
newHeading.innerHTML=" <i> hi, i am new learner</i>";
document.querySelector("body").prepend(newHeading);
let para=document.querySelector("p");
para.remove(); // for removing para
//P.Qs
let newbtn1=document.createElement("button");
newbtn1.innerText="Alert!";
newbtn1.style.color="white";
newbtn1.style.backgroundColor="red";
document.querySelector("body").prepend(newbtn1);
//Q.2
let paraa=document.querySelector("p")
//set attribute se newclass bnaye..2styling krne ke liye classlist ka use krege...para.classList
// paraa.classList.add("class","newClass");