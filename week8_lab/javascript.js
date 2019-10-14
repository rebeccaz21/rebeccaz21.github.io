function panda(name,age) {
	this.name = name;
	this.age = age;
	this.type = "panda";
	this.image = "panda.png";
}

function elephant(name,age) {
	this.name = name;
	this.age = age;
	this.type = "elephant";
	this.image = "elephant.png";
}

function lemur(name,age) {
	this.name = name;
	this.age = age;
	this.type = "lemur";
	this.image = "lemur.png"
}

var animals = [ new lemur(), new elephant(), new panda()];
var names = new Array("larry", "sally","po");

function generateRandomIndex(maxIndex) {
	console.log(Math.floor(Math.random() * maxIndex));

}

function generateRandomName() {
	var randomIndex = Math.floor(Math.random() * 3)
	return names[randomIndex];

}

function generateRandomAge() {
	var randomAge = Math.floor(Math.random() * 5) + 1;
	return randomAge;
}

function generateRandomAnimal() {
	var randomIdx = Math.floor(Math.random() * 3)
	var anim = animals[randomIdx];

	if (anim instanceof panda) {
		return new panda(generateRandomName(),generateRandomAge());
	}

	else if (anim instanceof elephant) {
		return new elephant(generateRandomName(),generateRandomAge());
	}

	else if (anim instanceof lemur) {
		return new lemur(generateRandomName(),generateRandomAge());
	}

}


function onLoad() {

	  var animal = JSON.parse(localStorage.getItem("savedAnimal"));
	  var hasSavedAnimal = false;

	  if (animal == null) {
	  	document.getElementById("button").textContent - "Save Animal";
	  	animal = generateRandomAnimal();

	  }
	  else {
	  	document.getElementById("button").textContent = "Clear Animal";
	  	hasSavedAnimal = true;
	  }

	  $("#animal-properties").text(animal.name + "  " + animal.age + "years old");
  	  $("#animal-img").attr("src", animal.image);

  	  document.getElementById("button").addEventListener("click",function() {
  	  	if (hasSavedAnimal) {
  	  		localStorage.removeItem("savedAnimal");

  	  		document.getElementById("button").style.display = "none";
  	  		document.getElementById("status").textContent = "cleared!";
  	  		document.getElementById("status").style.display = "block";
  	  	}

  	  	else {
  	  		localStorage.setItem("savedAnimal", JSON.stringify(animal));

  	  		document.getElementById("button").style.display = "none";
  	  		document.getElementById("status").textContent = "saved!";
  	  		document.getElementById("status").style.display = "block";
  	  	}
  	  });
};
