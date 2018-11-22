import { Component, OnInit } from "@angular/core";
import { BasketballService } from "../../services/basketball.service";
import { FootballService } from "../../services/football.service";

@Component({
  selector: "app-trophies-info",
  templateUrl: "./trophies-info.component.html",
  styleUrls: ["./trophies-info.component.css"]
})
export class TrophiesInfoComponent implements OnInit {
  public footData: any;
  public basketData: any;
  public cricketData: any;

  constructor(
    public basketService: BasketballService,
    public footballService: FootballService
  ) {}

  ngOnInit() {
    this.footStandings();
    this.basketStandings();
  }

  footStandings() {
    //requires legues id what to do??????(use default)
    this.footballService.footStandings().subscribe(res => {
      this.footData = res.json();
      this.footData = this.footData.result;
      console.log("Football Standings data", this.footData);
    });
  }

  basketStandings() {
    //requires legues id what to do??????(use default)
    this.basketService.basketStandings().subscribe(res => {
      this.basketData = res.json();
      this.basketData = this.basketData.result;
      console.log("Basket Standings data", this.basketData);
    });
  }
}
