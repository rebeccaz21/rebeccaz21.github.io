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
var new_ar = new Array();

function addToPack() {


	new_ar = JSON.parse(localStorage.getItem("lstOfProd"));
	localStorage.setItem("lstOfProd", JSON.stringify(new_ar));

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
		im = "Assets/catbackpack3.png";
	}

	else if (c == " crazyberry") {
		im = "Assets/catbackpack2.png";
	}

	else if (c == " fire orange") {
		im = "Assets/catbackpack4.png"; 
	}

	else if (c == " blackberry") {
		im = "Assets/catbackpack1.png";
	}

	console.log(s);
	console.log(c);
	console.log(im);

	var catbp = new prod(s,c,im,1);

	
	var currList = JSON.parse(localStorage.getItem("lstOfProd"));
	var test = currList.push(catbp); 
	localStorage.setItem("lstOfProd",JSON.stringify(currList));

	var L = document.getElementById("addTo");
	L.textContent = "pack ("+new_ar.length+")";

	console.log(JSON.parse(localStorage.getItem("lstOfProd")));
	console.log("finished");
	window.location.reload()


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


function clearE() {
	
	var y = localStorage.getItem("lstOfProd");

	
	localStorage.setItem("lstOfProd",JSON.stringify(new Array()));
	console.log("cleared");
	window.location.reload()
	return;
}

function rnd() {
	return Math.floor(Math.random() * 100);
}

function removeItem(elem) {

	console.log("removing");

	var lst = JSON.parse(localStorage.getItem("lstOfProd"));
	var index = parseInt(elem.getAttribute("id"));
	lst.splice(index,1);

	localStorage.setItem("lstOfProd",JSON.stringify(lst));

	/* loop through list and how can we check

	perhaps assign each button with the index so that 
	we can retrieve the index and get the cart from local storage and splice it
	then when we load again, it will reupdate the the i for each item 

	*/

	elem.parentNode.parentNode.remove();



	/* we need to remove the object from the list and update pack*/
	window.location.reload();
	return;
}

function onLoad2() {

	var curr = JSON.parse(localStorage.getItem("lstOfProd"));


	var Y = document.getElementsByClassName("updatePack")[0];		
	console.log(Y);
	Y.innerHTML = "pack ("+curr.length+")"; 


	var newStr = "";
	localStorage.setItem("lstOfProd",JSON.stringify(curr));
	console.log(curr);

	for (i = 0; i < curr.length; i++) {

		if (curr == []) {
			newStr = "No products!";
		}

		else {

			var item = curr[i];

			/* perhaps have div class for each item and this will be a grid and css will change grid for that one */

			newStr = newStr+ "<div class = 'specific-prod'> <img id = 'item-1' class = 'in-cart' src="+item.image+" alt = 'cat backpack' /> ";
			newStr = newStr+"<div class = 'item-details'> <h4> Cat Backpack </h4 <h5>"+item.size+"/"+item.color+"</h5> <button class = 'remove' id = "+ i +" onclick = 'removeItem(this)'> remove </button> </div>";
			newStr = newStr+"<div class = 'quantity'> <p> Quantity: <a id = 'clicks'>" + item.num+"</a></p> <button type='button' onClick='onClick()'>+</button> ";
			newStr = newStr+"<button type='button' onClick='onClick2()'>-</button> </div>"; 
			newStr = newStr + "<div class = 'prod-price'> <p> $"+item.price+" </p> </div> </div>";

		}
	}

	console.log(newStr);
	document.getElementById("pack-products").innerHTML = newStr;


	/* calculate the new totals + numbers */

	var subtotal = Number(44.95 * curr.length).toFixed(2);
	var tax = Number(.07* subtotal).toFixed(2);
	var total = Number( Number(tax)+Number(subtotal)).toFixed(2);

	var newSum = "<h3> Summary </h3> <h4>"+ curr.length+" Items </h4> <h5> Subtotal: $" + subtotal+ "</h5>";
	newSum = newSum + "<h5> Tax: $" +tax+ "</h5> <h5> Shipping: Free</h5> <h4> Total: $"+ total+"</h4>";
	newSum = newSum + "<button id = 'check-out'> Checkout </button> <button id = 'c' onClick = 'clearE()'> clear everything </button>";

	document.getElementById("summary").innerHTML = newSum;



};

function onLoad() {

	var curr = JSON.parse(localStorage.getItem("lstOfProd"));


	var Y = document.getElementsByClassName("updatePack")[0];		
	console.log(Y);
	Y.innerHTML = "pack ("+curr.length+")"; 

	localStorage.setItem("lstOfProd",JSON.stringify(curr));
	console.log(curr);

};



