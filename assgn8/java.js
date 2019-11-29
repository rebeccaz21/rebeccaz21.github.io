
// Function that will scroll "scrollHere" id into view
// Specifically, scroll to the interactive section on the "Home" page
function onLinkClick() {
  document.getElementById("scrollHere").scrollIntoView();
}

// 2-d array for each egg
// first element is difficulty and second element is the time it takes to cook
var ease = [["Easy","5 min"],["Easy","7 min"],["Hard","25 min"],["Medium","15 min"],["Medium","6 min"],["Easy","5 min"],["Hard","8 min"],["Easy","10 min"]]

//function to transition uncracked egg to a way to cook an egg 
//use this in the interactive section of "Home" page
function changeEgg(id) {

	// get class name of parent to change the transition to fadeIn 
	document.getElementById(id).parentElement.className = "col-sm-6 col-md-3 fadeIn ";

	//change the image to be a unique way to cook an egg
	// also get the difficulty and time from the 2-d array "ease"
	var inner = "<img id = '"+id+"' class = 'hoverEgg' src = 'img/"+ id+".png'>";
	var difficulty = ease[id][0];
	var time = ease[id][1];

	// display the difficulty and time
	inner = inner + "<div class = 'top-layer'> <div class = 'tex'> <h6 class = 'smol'> Difficulty: "+difficulty+"</h6>";
	inner = inner + "<h6 class = 'smol'> Time: "+ time + "</h6> </div> </div>";

	//change innerHTML to display the changes
	document.getElementById(id).parentElement.innerHTML = inner;

}

//function to reveal all of the eggs after pressing the button "reveal all." on the home page
function revealAll() {

	//for each egg, change the image, get the difficulty and time 
	//change the innerHTMl to display all the information
	for (i=0; i<=7; i++) {
		document.getElementById(i).parentElement.className = "col-sm-6 col-md-3 fadeIn";
		var inner = "<img id = '"+i+"' class = 'hoverEgg' src = 'img/"+ i+".png'>";
		var difficulty = ease[i][0];
		var time = ease[i][1];
		inner = inner + "<div class = 'top-layer'> <div class = 'tex'> <h6 class = 'smol'> Difficulty: "+difficulty+"</h6>";
		inner = inner + "<h6 class = 'smol'> Time: "+ time + "</h6> </div> </div>";

		document.getElementById(i).parentElement.innerHTML = inner;
	}

	// change the button to say "eggs revealed" so the user knows
	document.getElementById("reveal").innerHTML = "Eggs Revealed!";
}

//take in the time and calculate what types of eggs the user can cook
function calculateEggs() {

	//initialize x and get the value from form input
	// change x to be a number
	var x = 0;
	x = document.getElementById("myText").value;
	var y = Number(x);
	
	//check that the user input is an integer
	//if not, show a warning message
	//otherwise, check the time and present the eggs that can be made
	if (Number.isInteger(y)) {

		document.getElementById("warn").style.opacity = 0;
		document.getElementById("warn").innerHTML = "";

		var z = [];

		// if user has 5 minutes 
		if (y == 5) {
			z = [ 

				["Sunny-Side Up", "https://www.cookinglight.com/recipes/pristine-sunny-side-up-eggs"], 
				["Over-Easy", "https://www.foodnetwork.com/recipes/alton-brown/eggs-over-easy-recipe-1955878"]

			];
		}

		// if user has 6 minutes
		else if (y > 5 && y <= 6) {
			z = [ 

				["Sunny-Side Up", "https://www.cookinglight.com/recipes/pristine-sunny-side-up-eggs"], 
				["Over-Easy", "https://www.foodnetwork.com/recipes/alton-brown/eggs-over-easy-recipe-1955878"],
				["Soft-Boiled", "https://www.thekitchn.com/how-to-make-a-soft-boiled-egg-kitchn-cooking-lesson-138819"]

			];
		}

		//if user has 7 minutes
		else if (y>6 && y<=7) {
			z = [ 

				["Sunny-Side Up", "https://www.cookinglight.com/recipes/pristine-sunny-side-up-eggs"], 
				["Over-Easy", "https://www.foodnetwork.com/recipes/alton-brown/eggs-over-easy-recipe-1955878"],
				["Soft-Boiled", "https://www.thekitchn.com/how-to-make-a-soft-boiled-egg-kitchn-cooking-lesson-138819"],
				["Scrambled","https://www.incredibleegg.org/recipe/basic-scrambled-eggs/"]

			];	

		}
		// if user has 8 minutes 
		else if (y>7 && y<=8) {
			z = [ 

				["Sunny-Side Up", "https://www.cookinglight.com/recipes/pristine-sunny-side-up-eggs"], 
				["Over-Easy", "https://www.foodnetwork.com/recipes/alton-brown/eggs-over-easy-recipe-1955878"],
				["Soft-Boiled", "https://www.thekitchn.com/how-to-make-a-soft-boiled-egg-kitchn-cooking-lesson-138819"],
				["Scrambled","https://www.incredibleegg.org/recipe/basic-scrambled-eggs/"],
				["Poached", "https://www.incredibleegg.org/recipe/basic-poached-eggs/"]

			];	
		}

		//if user has 9 or 10 minutes
		else if (y>8 && y <= 10) {
			z = [ 

				["Sunny-Side Up", "https://www.cookinglight.com/recipes/pristine-sunny-side-up-eggs"], 
				["Over-Easy", "https://www.foodnetwork.com/recipes/alton-brown/eggs-over-easy-recipe-1955878"],
				["Soft-Boiled", "https://www.thekitchn.com/how-to-make-a-soft-boiled-egg-kitchn-cooking-lesson-138819"],
				["Scrambled","https://www.incredibleegg.org/recipe/basic-scrambled-eggs/"],
				["Poached", "https://www.incredibleegg.org/recipe/basic-poached-eggs/"],
				["Hard-Boiled","https://www.deliciousmeetshealthy.com/how-to-make-perfect-hard-boiled-eggs/"]

			];	

		}

		//if user has 11 to 15 minutes
		else if (y>10 && y <= 15) {

			z = [ 

				["Sunny-Side Up", "https://www.cookinglight.com/recipes/pristine-sunny-side-up-eggs"], 
				["Over-Easy", "https://www.foodnetwork.com/recipes/alton-brown/eggs-over-easy-recipe-1955878"],
				["Soft-Boiled", "https://www.thekitchn.com/how-to-make-a-soft-boiled-egg-kitchn-cooking-lesson-138819"],
				["Scrambled","https://www.incredibleegg.org/recipe/basic-scrambled-eggs/"],
				["Poached", "https://www.incredibleegg.org/recipe/basic-poached-eggs/"],
				["Hard-Boiled","https://www.deliciousmeetshealthy.com/how-to-make-perfect-hard-boiled-eggs/"]
				["Omelet","https://www.foodnetwork.com/recipes/alton-brown/omelet-recipe-1914282"]

			];	
		}

		// if user has over 15 minutes, they can make all of the egg options
		else if (y>15) {

			z = [ 

				["Sunny-Side Up", "https://www.cookinglight.com/recipes/pristine-sunny-side-up-eggs"], 
				["Over-Easy", "https://www.foodnetwork.com/recipes/alton-brown/eggs-over-easy-recipe-1955878"],
				["Soft-Boiled", "https://www.thekitchn.com/how-to-make-a-soft-boiled-egg-kitchn-cooking-lesson-138819"],
				["Scrambled","https://www.incredibleegg.org/recipe/basic-scrambled-eggs/"],
				["Poached", "https://www.incredibleegg.org/recipe/basic-poached-eggs/"],
				["Hard-Boiled","https://www.deliciousmeetshealthy.com/how-to-make-perfect-hard-boiled-eggs/"],
				["Omelet","https://www.foodnetwork.com/recipes/alton-brown/omelet-recipe-1914282"],
				["Deviled", "https://www.foodnetwork.com/recipes/classic-deviled-eggs-recipe-1911032"]

			];	

		}

		//present and show the information 
		var newInner = "<h5 id = 'make'> You can Make: </h5>";

		// look through the length of the list, get the type of egg and the link to recipe
		// update the innerHTML
		for (i = 0; i < z.length ; i++) {
			console.log(z[i]);
			var firstList = z[i]
			var nextEgg = firstList[0];
			var link = firstList[1];
			newInner = newInner + "<h6 class = 'what-eggs'> <a href = " + link +" target = '_blank'> "+ nextEgg + "</a> </h6>";
		}

		document.getElementById("calculate").innerHTML = newInner;

	}

	// show the warning message
	else {
		document.getElementById("warn").style.opacity = 1;
		document.getElementById("warn").innerHTML = "Your brain is scrambled. Please input a valid whole number.";
	}
	


}

//the array of egg puns
var puns = [ ["Why did the new egg feel so good?", "Because he just got laid!"],
			 ["Why did the egg regret being in an omelet?", " It wasn't all it was cracked up to be!"],
			 ["What did the egg say after it was ghosted?", "Why the hell are you egg-noring me?"],
			 ["Why did Snow White name her hen?", "Egg White!"],
			 ["Why were the eggs running so fast?", " They were afraid of being beaten!"],
			 ["Why do so many people love a boiled egg for breakfast?", "It's so hard to beat."],
			 ["How did the omelet find out she was ill?", "She had a medical eggs-am!"],
			 ["What did they egg say after someone bumped into her?", "Egg-scuse me!"],
			 ["Why did the Easter egg hide?", "He was a little chicken!"],
			 ["What is an egg's least favorite day of the week?", "Fry-day!"],
			 ["What's the worst crime as far as an egg is concerned?", "Poaching!"],
			 ["What do you call a smart omelet?", "An egg head!"],
			 ["How can you tell where the Easter Bunny’s been?", "Eggs marks the spot!"],
			 ["How does the Easter Bunny stay in shape during the off season?","He gets lots of eggs-ercise!"],
			 ["Why should you be careful about what you say around egg whites?","Everyone knows they can’t take a yolk."],
			 ["How do you make an egg roll?", "Just give it a little push!"],
			 ["Did you hear about the hen who laid her egg on an axe?","She wanted to hatchet."],
			 ["How does the Easter Bunny feel after she’s made all her deliveries?","Eggs-hausted!"],
			 ["Why did it take the chicken so long to cross the road?","There was no eggs-press lane!"],
			 ["What did the officer say to the egg after he pulled it over for speeding?","Omelettin’ it slide this time."],
			 ["What did the angry egg parent say to her child?", "You’re such a rotten egg!"],
			 ["How would you describe a baby egg on Christmas morning?","Absolutely egg-static!"],
			 ["What did the egg say to the clown?","You crack me up?"],
			 ["How does a hen leave it’s house?","Through the eggs-it."],
			 ["How do you know if a chef is mean?","He beats all the eggs."],
			 ["How do monsters like their eggs?","Terri-fried."],
			 ["What sport are eggs best at?","Running."],
			];

//generate a new egg pun to be shown 
function newPun() {

	//generate a random number that is less than the length of the pun array
	var i = Math.floor(Math.random() * puns.length);

	// get the pun in the array
	var p = puns[i];
	var newInner = "";

	//create the new innerHTML
	for (j = 0; j < p.length; j++) {
		newInner = newInner + "<h6> " + p[j]+"</h6>";

	}

	//change the innerHTML to show the pun
	document.getElementById("pun").innerHTML = newInner;
}


//initialize the opacity of the egg and chicken images as .1

var eggOp = .1;
var chickOp = .1;

//increment the opacity of the egg image on the "Egg or Chicken" section by .05 for each click
function change_o1() {
	eggOp = eggOp + .05;
	document.getElementById("eggie").style.opacity = eggOp;
	console.log(document.getElementById("eggie").style.opacity = eggOp)

}

//increment the opacity of the chicken image on the "Egg or Chicken" section by .05 for each click
function change_o2() {
	chickOp = chickOp + .05;
	document.getElementById("chickie").style.opacity = chickOp;
	console.log(document.getElementById("chickie").style.opacity = chickOp)

}


