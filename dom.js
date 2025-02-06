let heading= document.getElementById("myid"); //h1
console.dir(heading);
let headings= document.getElementsByClassName("heading-class");
console.dir(headings);
console.log(headings);
let paragraphs=document.getElementsByTagName("P");
console.dir(paragraphs);
let firstel=document.querySelector("p"); //1st element
console.dir(firstel);
let all=document.querySelectorAll("p"); // all elements
console.dir(all); 
//queryselector me class . ke sath likhte ,id ke sath#

let divs=document.querySelectorAll(".box");
// divs[0].innerText ="new unique value1";
// divs[1].innerText ="new unique value3";
// divs[2].innerText ="new unique value3";
// better option to code
let idx=1;
for(div of divs){
    div.innerText=`new unique vaiues ${idx}`;
    idx++;
}
//ye toh 3 divs ke baat pr zyada divs chaiye ho toh html me give input and js will simplify it for you
//BY USING for of LOOP