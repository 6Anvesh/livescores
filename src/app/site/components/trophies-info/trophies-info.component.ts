import { Component, OnInit } from "@angular/core";
import { BasketballService } from "../../services/basketball.service";
import { FootballService } from "../../services/football.service";

@Component({
  selector: "app-trophies-info",
  templateUrl: "./trophies-info.component.html",
  styleUrls: ["./trophies-info.component.css"]
})
export class TrophiesInfoComponent implements OnInit {
  public footDataAway: any;
  public footDataHome:any;
  public basketDataAway: any;
  public basketDataHome: any;
  public cricketData: any;

  constructor(
    public basketService: BasketballService,
    public footballService: FootballService
  ) {}

  ngOnInit() {
  }

  footStandings() {
    //requires legues id what to do??????(use default)
    this.footballService.footStandings().subscribe(res => {
      this.footDataAway = res.result.away;
      this.footDataHome=res.result.home;
      console.log("Football Standings data", this.footDataAway,this.footDataHome);
    });
  }

  basketStandings() {
    //requires legues id what to do??????(use default)
    this.basketService.basketStandings().subscribe(res => {
      this.basketDataAway = res.result.away;
      this.basketDataHome=res.result.home;
      console.log("Basket Standings data",this.basketDataAway, this.basketDataHome);
    });
  }
}
