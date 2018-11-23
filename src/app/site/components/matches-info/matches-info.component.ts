import { Component, OnInit } from "@angular/core";
import { FootballService } from "../../services/football.service";
import { BasketballService } from "../../services/basketball.service";

@Component({
  selector: "app-matches-info",
  templateUrl: "./matches-info.component.html",
  styleUrls: ["./matches-info.component.css"]
})
export class MatchesInfoComponent implements OnInit {
  public basketBall: Boolean;
  public footBall: Boolean;
  public footData: any;
  public basketData: any;

  constructor(
    public footballService: FootballService,
    public basketService: BasketballService
  ) {
    this.basketBall = this.footBall = false;
  }

  ngOnInit() {
    // this.footMatches();
    // console.log("ok", this.basketBall, this.footBall);
    // this.basketMatches();
  }

  footMatches() {
    this.footBall = true;
    this.basketBall = false;
    this.footballService.footMatchDetails().subscribe(res => {
      this.footData = res.result;
      console.log("fotData", this.footData[0]);
    });
  }

  basketMatches() {
    this.footBall = false;
    this.basketBall = true;
    this.basketService.basketMatchDetails().subscribe(res => {
      this.basketData = res.result;
      console.log("Bot Data", this.basketData);
    });
  }
}
