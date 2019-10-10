
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
	/*

	if (document.getElementById(checkbox_id).checked) {
		document.getElementById('product-image').src=file;
		console.log("hello");
	} */
