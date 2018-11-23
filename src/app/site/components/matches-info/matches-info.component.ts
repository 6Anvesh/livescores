import { Component, OnInit } from "@angular/core";
import { FootballService } from "../../services/football.service";
import { BasketballService } from "../../services/basketball.service";

@Component({
  selector: "app-matches-info",
  templateUrl: "./matches-info.component.html",
  styleUrls: ["./matches-info.component.css"]
})
export class MatchesInfoComponent implements OnInit {
  public footData: any;
  public basketData: any;

  constructor(
    public footballService: FootballService,
    public basketService: BasketballService
  ) {}

  ngOnInit() {
    this.footMatches();
    // this.basketMatches();
  }

  footMatches() {
    //Leagues
    // this.footballService.footLeagues().subscribe(res => {
    //   this.footData = res.result;
    // this.footData = this.footData.result;
    // console.log("Foot dtaa", this.footData);
    // });
    //Matches
    // this.footballService.footMatchDetails().subscribe(res => {
    //   let data = res.result;
    //   data.map(ele => {
    //     this.footData.push(ele);
    //   });
    //   console.log("Merged leagues and match data", this.footData);
    // });
    //only matches
    this.footballService.footMatchDetails().subscribe(res => {
      this.footData = res.result;
      console.log("Football Data", this.footData[2]);
    });
  }

  basketMatches() {
    //Leagues
    this.basketService.basketLeagues().subscribe(res => {
      this.basketData = res.result;
      // console.log("Foot dtaa", this.footData);
    });
    //Matches
    this.basketService.basketMatchDetails().subscribe(res => {
      let data = res.result;
      // console.log("This", data.result);
      data.map(ele => {
        this.basketData.push(ele);
      });
      console.log("matches and league data", this.basketData);
    });
    // only matches
    // this.basketService.basketMatchDetails().subscribe(res => {
    //   this.basketData = res.json();
    //   this.basketData = this.basketData.result;
    // });
  }
}
