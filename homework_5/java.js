
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

function prod(name, size, color, image, num) {
	this.name = name;
	this.size = size;
	this.color = color;
	this.image = "panda.png";
	this.num = num
}

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

function addToPack() {
	console.log("hello");
	/* check which size and color, image are selected in helper functions
	use those to make a new object and add it to the list of pack*/
};
	/*
	all items need to be in classes so we can display them the same way in the grid
	we need to have something display when there is no items in the cart
	we need ot keep track of a variable for how many items in the cart and objects
	object for item = photo, name, size, color, quantity
	} */