import { Component, OnInit } from "@angular/core";
import { FootballService } from "../../services/football.service";
import { BasketballService } from "../../services/basketball.service";

@Component({
  selector: "app-livescore-info",
  templateUrl: "./livescore-info.component.html",
  styleUrls: ["./livescore-info.component.css"]
})
export class LivescoreInfoComponent implements OnInit {
  public liveData: any;
  constructor(
    public footballService: FootballService,
    public basketService: BasketballService
  ) {}

  ngOnInit() {
    this.footballLiveScore();
    this.basketballLiveScore();
  }

  footballLiveScore() {
    this.footballService.footLiveScore().subscribe((res: any) => {
      console.log("Res we got live", res.result);
      this.liveData = res.result;
    });
  }

  basketballLiveScore() {
    this.basketService.basketLiveScore().subscribe(res => {
      console.log("live score of basketball", res);
    });
  }
}
