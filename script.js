console.log('giffice!');

var getGifRequest = new XMLHttpRequest(); // create an AJAX request
var gif = document.getElementById('gif'); // get the img element for displaying the GIFs

// process the response
getGifRequest.onload = function() {
	if (getGifRequest.status === 200) { // if successful response
		console.log('Successful response!');

		var response = JSON.parse(getGifRequest.responseText); // convert the retunred JSON data to an object
		var gifUrl = response.data.images.fixed_height.url; // get the URL of the gif

		gif.setAttribute("src", gifUrl);
		gif.className = ""; // show the GIF
	}
}

function getGif() {
	console.log('Getting a new GIF...');

	// prepare the request
	getGifRequest.open('GET',
										 'https://api.giphy.com/v1/gifs/random?api_key=1ky79YywpO2i1aiQoH0CST27dVeDQFzS&tag=the+office&fmt=json',
										 true);

	getGifRequest.send(); // send the request
}

getGif(); // get the initial gif

var newGifButton = document.getElementById('new-gif-button'); // get the button that changes the GIF

// change the GIF when the user clicks the button
newGifButton.addEventListener('click', function() {
	gif.className = "display-none";
	getGif();
}, false);
