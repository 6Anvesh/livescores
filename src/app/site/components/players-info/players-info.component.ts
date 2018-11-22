import {
  Component,
  OnInit,
  Input,
  OnChanges,
  AfterViewInit
} from "@angular/core";
import { CricketService } from "../../services/cricket.service";
import { FootballService } from "../../services/football.service";

@Component({
  selector: "app-players-info",
  templateUrl: "./players-info.component.html",
  styleUrls: ["./players-info.component.css"]
})
export class PlayersInfoComponent implements OnInit, OnChanges {
  public playerDetails: any;
  public searchText: string;
  public searchData: any;
  public statsInfo: boolean = false;
  public playerName: String;
  public footData: any;

  constructor(
    public circketService: CricketService,
    public footballService: FootballService
  ) {}

  ngOnChanges() {}
  ngOnInit() {
    // this.circketService.getplayerData().subscribe((res)=>{
    //   console.log('player res',res);
    //   this.playerDetails=res;
    //   })
    //   console.log('player',this.playerDetails);
  }

  playerInfo() {
    this.circketService.playerStats(35320).subscribe(response => {
      this.playerDetails = response;
      console.log("playwe w", this.playerDetails);
    });
  }

  playerFinder() {
    console.log("test", this.searchText);
    this.circketService.playerFinder(this.searchText).subscribe(response => {
      console.log("playwe finder", response);
      this.searchData = response.data;
    });
  }
  playerSelected(pid: any) {
    this.circketService.playerStats(pid).subscribe(response => {
      this.playerDetails = response;
      console.log("playwe w", this.playerDetails);
    });
  }

  viewMore() {
    this.statsInfo = true;
    this.footballPlayers();
  }

  footballPlayers() {
    this.footballService
      .footPlayersDetails(this.playerName)
      .subscribe((res: any) => {
        res = res.json();
        this.footData = res.result;
        // console.log("this", this.footData);
      });
  }
}
