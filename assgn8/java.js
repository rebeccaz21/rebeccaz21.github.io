function onLinkClick() {
  document.getElementById("scrollHere").scrollIntoView();
}

function changeEgg(id) {

	document.getElementById(id).parentElement.className = "col-sm-6 col-md-3 fadeIn";
	document.getElementById(id).parentElement.innerHTML = "<img id = '"+id+"' class = 'hoverEgg' src = 'img/"+ id+".png' >";

}

function revealAll() {
	for (i=0; i<=7; i++) {
		document.getElementById(i).parentElement.className = "col-sm-6 col-md-3 fadeIn";
		document.getElementById(i).parentElement.innerHTML = "<img id = '"+i+"' class = 'hoverEgg' src = 'img/"+ i+".png' >";
	}

	document.getElementById("reveal").innerHTML = "Eggs Revealed!";
}


function calculateEggs() {
	var x = document.getElementById("myText").value;
	var y = Number(x);

	var z = [];

	if (y > 0 && y < 10) {
		z = ["Scrambled Eggs", "Boiled Eggs"];
	}

	if (y >= 10 && y < 20) {
		z = ["Scrambled Eggs", "Boiled Eggs", "Deviled Eggs"];
	}

	var newInner = "<h5 id = 'make'> You can Make: </h5>";

	for (i = 0; i < z.length ; i++) {
		var next = z[i];

		newInner = newInner + "<h6 class = 'what-eggs'>" + next + " </h6>";
	}

	document.getElementById("calculate").innerHTML = newInner;


}

var puns = ["You are scrambled.","You are cool","Nice","Hehe"];

function newPun() {
	var i = Math.floor(Math.random() * puns.length);
	document.getElementById("pun").innerHTML = "<h3>"+ puns[i] +"</h3>";
}







