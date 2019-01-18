"use strict";
var basePrice = 6;
var sizePrice = 0;
var toppings = 0;
var pizzaSize = 2;

var img1 = new Image();
var img2 = new Image();
var img3 = new Image();
var img4 = new Image();
var img5 = new Image();

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var pcheck = document.getElementById("pepperoni_check");
var gcheck = document.getElementById("green_check");
var mcheck = document.getElementById("mushroom_check");
var bcheck = document.getElementById("bacon_check");
var price_display = document.getElementById("price");

var smallCheck = document.getElementById("small_check");
var mediumCheck = document.getElementById("medium_check");
var largeCheck = document.getElementById("large_check");

pcheck.addEventListener("change", draw);
gcheck.addEventListener("change", draw);
mcheck.addEventListener("change", draw);
bcheck.addEventListener("change", draw);

smallCheck.addEventListener("change", scaleImage);
mediumCheck.addEventListener("change", scaleImage);
largeCheck.addEventListener("change", scaleImage);

img1.onload = function () {
	scaleImage();
};

function scaleImage(){
	if(smallCheck.checked){
		pizzaSize = 0;
		sizePrice = 0;
	}else if(mediumCheck.checked){
		pizzaSize = 1;
		sizePrice = 2;
	}else{
		pizzaSize = 2;
		sizePrice = 4;
	}
	draw();
}

function draw(){
	if(pizzaSize == 0){
		canvas.style.width= "40%";
	}else if(pizzaSize == 1){
		canvas.style.width = "60%";
	}else{
		canvas.style.width = "80%";
	}
	
	ctx.drawImage(img1, 0, 0);
	
	if(pcheck.checked){
		ctx.drawImage(img2, 0, 0);
		toppings++;
	}
	if(gcheck.checked){
		ctx.drawImage(img3,0,0);
		toppings++;
	}
	if(mcheck.checked){
		ctx.drawImage(img4,0,0);
		toppings++;
	}
	if(bcheck.checked){
		ctx.drawImage(img5,0,0);
		toppings++;
	}
	
	var price = basePrice + sizePrice +  toppings*0.5;
	toppings = 0;
	
	price_display.innerHTML = "Total Price: $" + price.toFixed(2);
}

img1.src = 'images/pizza.png';
img2.src = 'images/pepperonis.png';
img3.src = 'images/peppers.png';
img4.src = 'images/mushrooms.png';
img5.src = 'images/bacon.png';