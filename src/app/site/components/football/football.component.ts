import { Component, OnInit } from '@angular/core';
import { FootballService } from '../../services/football.service';
import { Router } from '../../../../../node_modules/@angular/router';

declare var $;
@Component({
  selector: 'app-football',
  templateUrl: './football.component.html',
  styleUrls: ['./football.component.css']
})

export class FootballComponent implements OnInit {
  searchText: string;
  selectField: string='';
  footballPlayersData: any;
  playerData: any;
  searchFootball: any;
  footDataAway: any;
  footDataHome: any;
  liveFootData: any;
  matchFootData: any;

  constructor(
    private footballService: FootballService,
    public router: Router
  ) {
    this.footballPlayersInfo();
   }

  ngOnInit() {
    $('.ui.dropdown').dropdown();
  }

  footballPlayersInfo(){   //football players
this.footballService.footTeams().subscribe((res: any) => {
  this.footballPlayersData = res.result[0];
  this.playerData=res.result[0].players;
  console.log('footballPlayersData',this.footballPlayersData,this.playerData);
});
  }

  footballPlayers() {   //searching football Players
    console.log("football",this.selectField, this.searchText);
    this.footballService.footPlayersDetails(this.searchText).subscribe((res: any) => {
        console.log('res foot',res);
        this.searchFootball = res.result;
        console.log("this", this.searchFootball);
      });
  }

  footballTrophies(ev:any) {
    //requires legues id what to do??????(use default)
    this.selectField=ev;
    this.footballService.footStandings().subscribe(res => {
      this.footDataAway = res.result.away;
      this.footDataHome=res.result.home;
      console.log("Football Standings data", this.footDataAway,this.footDataHome);
    });
  }

  footballLiveScore(ev:any){
    this.selectField=ev;
    this.footballService.footLiveScore().subscribe((res: any) => {
      console.log("football live", res.result);
      this.liveFootData = res.result;
    });

  }

  footballMatches(ev:any){
    this.selectField=ev;
    this.footballService.footMatchDetails().subscribe(res => {
      this.matchFootData = res.result;
      console.log("fotData", this.matchFootData[0]);
    });
  }

  cricketClicked(){
    this.router.navigateByUrl('/circket');
  }

  basketballClicked(){
    this.router.navigateByUrl('/basketball');
  }

  footballClicked(){
    this.router.navigateByUrl('/football');
  }

  homeClicked(){
    this.router.navigateByUrl('/home');
  }
}
