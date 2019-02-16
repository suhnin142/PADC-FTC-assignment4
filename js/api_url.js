class API_URL {
	constructor(){
		this.upcoming_url = "movie/upcoming?api_key=<<api_key>>";
		this.base_url = "https://api.themoviedb.org/3/";
	}

	getUpcomingURL(key){
		return this.base_url + this.upcoming_url.replace("<<api_key>>", key);
	}
}

export default API_URL;