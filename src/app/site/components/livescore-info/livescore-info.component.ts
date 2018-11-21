import { Component, OnInit } from "@angular/core";
import { FootballService } from "../../services/football.service";

@Component({
  selector: "app-livescore-info",
  templateUrl: "./livescore-info.component.html",
  styleUrls: ["./livescore-info.component.css"]
})
export class LivescoreInfoComponent implements OnInit {
  public liveData: any;
  constructor(public footballService: FootballService) {}

  ngOnInit() {
    this.footballLiveScore();
  }

  footballLiveScore() {
    this.footballService.liveScore().subscribe((res: any) => {
      let data = res.json();
      console.log("Res we got live", data.result);
      this.liveData = data.result;
    });
  }
}
