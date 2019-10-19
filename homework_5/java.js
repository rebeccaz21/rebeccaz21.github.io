
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
localStorage.setItem("lstOfProd", JSON.stringify(new Array ()));

function addToPack() {

	pack = JSON.parse((localStorage.getItem("packNum"))) + 1;
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

	
	var currList = JSON.parse(localStorage.getItem("lstOfProd"));
	currList.appendChild(catbp);
	localStorage.setItem("lstOfProd",JSON.stringify(currList));

	console.log(localStorage.getItem("lstOfProd"));

	console.log(localStorage.getItem(n));


	return;
};
	/*
	use local storage to create a list of objects
	everytime we create an object, append it to the local storage

	when we want to create the html for the pack page, loop through the list and generate the html as strings: 
	"<div class = sdfjisoj"+catbackpack2.png+"</div>" etc. like that and use "\n" 
	then use innerHTML to change the innerHTMl within the div (so have one div id = ... for all of the items)
	create a variable outside of the function loop that will hold allll of the strings that we have
	then at the end, document.getId( id name for products) then write to innerHTML = the string for everything
	that we have just created
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

