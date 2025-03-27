let pic = document.getElementsByClassName("img");
console.log(pic);


/*function display(){
	let photo =["images/agra.avif","alleppey.avif","chikmangalur.jpg","jaipur.avif","leh.jpg","madurai.avif","manali.avif","ooty.webp","pondi.avif","rajastan.avif","pondi2.avif","shimla.webp"];
    let random = Math.floor(Math.random()*photo.length);
    console.log(random);
} */

let but = document.getElementById("but");
let img = document.querySelector(".img img");
but.addEventListener("click",function(){
    let photo =["images/agra.avif","images/alleppey.avif","images/chikmangalur.jpg","images/jaipur.avif","images/leh.jpg","images/madurai.avif","images/manali.avif","images/ooty.webp","images/pondi.avif","images/rajastan.avif","images/pondi2.avif","images/shimla.webp"];
    let random = Math.floor(Math.random()*photo.length);
	
	img.src = photo[random]; 
    console.log(random);
    
});