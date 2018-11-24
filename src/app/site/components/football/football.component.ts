import { Component, OnInit } from '@angular/core';
import { FootballService } from '../../services/football.service';
import { Router } from '../../../../../node_modules/@angular/router';
import { AuthService } from '../../services/auth.service';

declare var $;
@Component({
  selector: 'app-football',
  templateUrl: './football.component.html',
  styleUrls: ['./football.component.css']
})

export class FootballComponent implements OnInit {
  searchText: string;
  selectField: string='team';
  footballPlayersData: any;
  playerData: any;
  searchFootball: any;
  footDataAway: any;
  footDataHome: any;
  liveFootData: any;
  matchFootData: any;
  p:Number=1;
  authValue: any;
  loading:Boolean;

  constructor(
    private footballService: FootballService,
    public router: Router,public _auth:AuthService
  ) {
    this.footballPlayersInfo();
   }

  ngOnInit() {
    $('.ui.dropdown').dropdown();
    this.authValue=this._auth.loggedIn();
  }

  footballPlayersInfo(){   //football players
    this.loading=false;
this.footballService.footTeams().subscribe((res: any) => {
  this.footballPlayersData = res.result[0];
  this.playerData=res.result[0].players;
  this.loading=true
});
  }

  footballPlayers() {   //searching football Players
    this.loading=false;
    this.p=1;
    this.footballService.footPlayersDetails(this.searchText).subscribe((res: any) => {
        this.searchFootball = res.result;
        this.selectField=(this.searchFootball.length)?'':this.selectField;
        this.loading=true
      });
  }

  footballTrophies(ev:any) {
    this.selectField=ev;
    this.loading=false;
    this.p=1;
    this.footballService.footStandings().subscribe(res => {
      this.footDataAway = res.result.away;
      this.footDataHome=res.result.home;
      this.loading=true
    });
  }



  footballLiveScore(ev:any){
    this.selectField=ev;
    this.p=1;
    this.loading=false;
    this.footballService.footLiveScore().subscribe((res: any) => {
      this.liveFootData = res.result;
      this.loading=true
    });
  }
  
  footballMatches(ev:any){
    this.loading=false
    this.selectField=ev;
    this.p=1;
    this.footballService.footMatchDetails().subscribe(res => {
      this.matchFootData = res.result;
      this.loading=true
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

  logout(){
    this._auth.logoutUser();
      }
    
}
