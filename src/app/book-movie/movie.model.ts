export class Movie {
    public movieName : string;
    public time      : string;
    public members   : number;
    public imagePath : string

    constructor(movie:string, time:string, members:number, imagePath:string){
        this.movieName = movie;
        this.time      = time;
        this.members   = members;
        this.imagePath = imagePath;
    }
}
