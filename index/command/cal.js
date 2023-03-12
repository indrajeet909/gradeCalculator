let math =document.querySelector(".math");
let psy=document.querySelector(".psy");
let ch =document.querySelector(".ch");
let cs=document.querySelector(".cs");
let eng =document.querySelector(".eng");
let bng =document.querySelector(".bng");
let total =document.querySelector(".grade");
let btn =document.querySelector(".btn");
let average=document.querySelector(".avg");
let grd=document.querySelector(".res");

 btn.addEventListener("click",function()
 {
 let res =parseInt(math.value)+parseInt(psy.value)+
          parseInt(ch.value)+parseInt(cs.value)+
          parseInt(eng.value)+parseInt(bng.value);

 let avg =res*100/600;

 if(avg<=100 && avg>=90){
 grd.innerHTML="A-Excellent";
 }
 else if(avg<=89 && avg>=80){
 grd.innerHTML="B-Appreciable";
 }
 else if(avg<=79 && avg>=70){
 grd.innerHTML="C- Very_Good";
 }
 else if(avg<=69 && avg>=60){
 grd.innerHTML="D-Good";
 }
 else{
 grd.innerHTML="F:promotion denied";
 }}
 )

