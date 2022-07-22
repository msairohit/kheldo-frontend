export class Game{
  constructor(
    public gameId:string,
    public gameName:string,
    public gameDescription:string,
    public noOfPlayers:Number,
    public noOfTimesPlayed:Number,
    public rating:Number,
    public routerPath:string,
    public imageSource:string
  ){
  }
}