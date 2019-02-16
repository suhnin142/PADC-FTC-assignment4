import {readData,displayMovies} from '/js/main.js';
import key from '/js/api_key.js';
import API_URL from '/js/api_url.js';

const detailTemplate = document.getElementById("movie-info-template").innerHTML;
const viewport = document.getElementById("viewport");

const api_url = new API_URL();
																																																															
fetch(api_url.getUpcomingURL(key))
	.then((res) => res.json())
	.then((data) => readData(data))																																																																																																																																																																																																																																																																																																																						
	.then((moviearray) => displayMovies(moviearray,detailTemplate,viewport));

/*const moviearray = readData(data);																							
displayMovies(moviearray,detailTemplate,viewport);*/
