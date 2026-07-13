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
