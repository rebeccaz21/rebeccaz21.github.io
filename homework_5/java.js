
/* document.addEventListener("DOMContentLoaded", function() {
	for (var i = 1; i <= 4; i++) 
	{
		document.getElementById('i').checked = false;
	}

});

 function selectOnlyThis(id) {
	for (var i = 1; i <= 4; i++) 
	{
		if (document.getElementById('i').checked) {
			document.getElementById('i').checked = false;
		}
	}
	document.getElementById('id').checked = true;
}; */

function changePhoto(checkbox_id,file) {
	for (var i = 1; i <= 4; i++) 
	
	{ 
		if (i == checkbox_id) {
			document.getElementById('product-image').src=file;
			console.log("hello");
		}

		else {
			if (document.getElementById(i).checked) {
				document.getElementById(i).checked = false
			}
		} 

	}
};


function sizeOnly(checkbox_id) {
	for (var i = 5; i <= 8; i++) 
		if (i != checkbox_id) {
			if (document.getElementById(i).checked) {
				document.getElementById(i).checked = false;
			}

		}

};


var clicks = 1;
function onClick() {
	clicks += 1;                    
	document.getElementById("clicks").innerHTML = clicks;
};

function onClick2() {
	clicks -= 1;                    
	document.getElementById("clicks").innerHTML = clicks;
};

function prod(size, color, image, num) {
	this.name = "cat backpack";
	this.size = size;
	this.color = color;
	this.image = image;
	this.num = num;
	this.price= 44.95;
}

var pack = 0;

function addToPack() {

	pack = parseInt(localStorage.getItem("packNum")) + 1;
	localStorage.setItem("packNum",pack);
	
	var L = document.getElementById("addTo");
	L.textContent = "pack ("+pack+")";


	console.log(L.textContent);

	/* check the size */

	for (var i = 10; i <= 16; i+=2) 
	
	{ 
		/* the size is checked*/
		var ind = parseInt(i / 2);
		if (document.getElementById(ind).checked) {
			var s = document.getElementById(i).innerText;
		} 
	}

	/* check the color */

	for (var j = 100; j <= 400; j+= 100) {
		var inde = parseInt(j/100);
		if (document.getElementById(inde).checked) {
			var c = document.getElementById(j).innerText;
			console.log(document.getElementById(j).innerText);
		}

	}

	/*  get the correct image */
	var im; 

	if (c == " strawberry") {
		im = "catbackpack3.png";
	}

	else if (c == " crazyberry") {
		im = "catbackpack2.png";
	}

	else if (c == " fire orange") {
		im = "catbackpack4.png"; 
	}

	else if (c == " blackberry") {
		im = "catbackpack1.png";
	}

	console.log(s);
	console.log(c);
	console.log(im);

	var catbp = new prod(s,c,im,1);
	var n = localStorage.getItem("packNum");

	localStorage.setItem(n,JSON.stringify(catbp));

	console.log(localStorage.getItem(n));


	return;

	/* check which size and color, image are selected in helper functions
	use those to make a new object and add it to the list of pack, add it to local storage to view it in shopping cart page*/
};
	/*
	all items need to be in classes so we can display them the same way in the grid
	we need to have something display when there is no items in the cart
	we need ot keep track of a variable for how many items in the cart and objects
	object for item = photo, name, size, color, quantity
	} 

	use localStorage to store and remove as well 
	how can we format how the cart looks?
	*/

function onLoad() {

	var x = localStorage.getItem("packNum");
	var max = parseInt(x)+1;
	console.log(max);
	var Y = document.getElementsByClassName("updatePack")[0];		
	console.log(Y);
	Y.innerHTML = "pack ("+x+")"; 

	for (k = 1; k < max; k++) {
		var hehe = localStorage.getItem(k);
		console.log(hehe);
	}

}

