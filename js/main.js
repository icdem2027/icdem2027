console.log("iCDEM 2027 Loaded");
window.addEventListener("scroll",function(){

const navbar=document.querySelector(".navbar");

if(window.scrollY>50){

navbar.classList.add("scrolled");

}

else{

navbar.classList.remove("scrolled");

}

});
/*==============================
Back To Top
==============================*/

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.style.display="block";

}

else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

