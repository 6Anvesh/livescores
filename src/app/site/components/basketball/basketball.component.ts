import { Component, OnInit } from '@angular/core';
import { Router } from '../../../../../node_modules/@angular/router';
import { BasketballService } from '../../services/basketball.service';
import { AuthService } from '../../services/auth.service';

declare var $;
@Component({
  selector: 'app-basketball',
  templateUrl: './basketball.component.html',
  styleUrls: ['./basketball.component.css']
})
export class BasketballComponent implements OnInit {
  basketDataAway: any;
  basketDataHome: any;
  selectField: any='';
  liveBasketScore: any;
  matchesBasketBall: any;
  leagueBasketBall: any;
  p:Number=1;
  authValue: any;
  loading:Boolean;

  constructor(
    private router: Router,
    private basketballService:BasketballService,
    private _auth: AuthService
  ) { 
    this.basketballLiveScore('livescore');
  }

  ngOnInit() {
    $('.ui.dropdown').dropdown();
    this.authValue=this._auth.loggedIn();
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


  basketBallTrophies(ev:any) {
    this.loading=false;
    this.selectField=ev;
    this.p=1;
    this.basketballService.basketStandings().subscribe(res => {
      this.basketDataAway = res.result.away;
      this.basketDataHome=res.result.home;
      this.loading=true;
    });
  }
  basketballLiveScore(ev:any) {
    this.loading=false;
this.selectField=ev;
this.p=1;
    this.basketballService.basketLiveScore().subscribe(res => {
      this.liveBasketScore=res.result;
      this.loading=true;
    });
  }

  basketballMatches(ev:any){
    this.loading=false;
    this.selectField=ev;
    this.p=1;
    this.basketballService.basketMatchDetails().subscribe(res => {
      this.matchesBasketBall = res.result;
      this.loading=true;
    });
  }



homeClicked(){
  this.router.navigateByUrl('/home');
}
logout(){
  this._auth.logoutUser();
    }
}
