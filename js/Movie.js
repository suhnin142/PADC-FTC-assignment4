class Movie{
    constructor(id,title,poster,casts,link){
        this.id = id;
        this.title = title;
        this.poster = poster;
        this.casts = casts;
        this.link =link;        
    }
    render(template){
        this.detailTemplate = template;
        const result = this.detailTemplate
        .replace("{{this.id}}",this.id)
        .replace("{{this.title}}",this.title)
        .replace("{{this.poster}}",`https://image.tmdb.org/t/p/w500${this.poster}`)
        .replace("{{this.casts}}",this.casts)
        .replace("{{this.link}}",this.link);
        return result;
    }
}

export default Movie;