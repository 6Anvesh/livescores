import {
  Component,
  OnInit,
  Input,
  OnChanges,
  AfterViewInit
} from "@angular/core";
import { CricketService } from "../../services/cricket.service";
import { FootballService } from "../../services/football.service";
import { BasketballService } from "../../services/basketball.service";
import { Router } from "../../../../../node_modules/@angular/router";

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
  public playerName: String = "messi lionel";
  public footData: any;
  public selectField: any = "";
  public footballPlayersData: any;
  public playerData: any;
  public basketballPlayersData: any;
  public searchFootball: any;
  constructor(
    public circketService: CricketService,
    public footballService: FootballService,
    public basketballService: BasketballService,
    public router: Router
  ) {}

  ngOnChanges() {}
  ngOnInit() {
    // this.footballPlayers();
    // this.circketService.getplayerData().subscribe((res)=>{
    //   console.log('player res',res);
    //   this.playerDetails=res;
    //   })
    //   console.log('player',this.playerDetails);
  }

  selectSearch() {
    if (this.selectField == "cricket") {
      this.cricketPlayerFinder();
    } else if (this.selectField == "football") {
      this.footballPlayers();
    } else if (this.selectField == "basketball") {
      //baskeball feature
    }
  }

  cricketPlayerInfo() {
    this.searchText = "";
    this.selectField = "cricket";
    this.circketService.playerStats(35320).subscribe(response => {
      this.playerDetails = response;
      console.log("playwe w", this.playerDetails);
    });
  }

  cricketPlayerFinder() {
    //searching cricket Players
    // this.selectField=='cricket';
    console.log("cricket", this.selectField, this.searchText);
    this.circketService.playerFinder(this.searchText).subscribe(response => {
      console.log("playwe finder", response);
      this.searchData = response.data;
    });
  }
  cricketPlayerSelected(pid: any) {
    this.router.navigateByUrl("/player-info/" + pid);
    // this.circketService.playerStats(pid).subscribe(response => {
    //   this.playerDetails = response;
    //   console.log("playwe w", this.playerDetails);
    //   this.statsInfo = (this.playerDetails)?true:false;
    // });
  }

  footballPlayersInfo() {
    //football players
    this.searchText = "";
    this.selectField = "football";
    this.footballService.footTeams().subscribe((res: any) => {
      this.footballPlayersData = res.result[0];
      this.playerData = res.result[0].players;
      console.log(
        "footballPlayersData",
        this.footballPlayersData,
        this.playerData
      );
    });
  }

  footballPlayers() {
    //searching football Players
    // this.selectField='football';
    console.log("football", this.selectField, this.searchText);
    this.footballService
      .footPlayersDetails(this.searchText)
      .subscribe((res: any) => {
        console.log("res foot", res);
        this.searchFootball = res.result;
        console.log("this", this.searchFootball);
      });
  }

  basketPlayerInfo() {
    //basketball players
    this.searchText = "";
    this.selectField = "basketball";
    console.log("cricket", this.selectField, this.searchText);
    this.basketballService.basketTeams().subscribe((res: any) => {
      console.log("res basket", res);
      this.basketballPlayersData = res.result[0];
      console.log("basket", this.basketballPlayersData);
    });
  }
}
