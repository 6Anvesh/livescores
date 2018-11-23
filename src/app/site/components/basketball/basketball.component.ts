import { Component, OnInit } from '@angular/core';
import { Router } from '../../../../../node_modules/@angular/router';
import { BasketballService } from '../../services/basketball.service';

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

  constructor(
    private router: Router,
    private basketballService:BasketballService,
  ) { 
    // this.basketballTeam();
  }

  ngOnInit() {
    $('.ui.dropdown').dropdown();
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
    this.selectField=ev;
    //requires legues id what to do??????(use default)
    this.basketballService.basketStandings().subscribe(res => {
      this.basketDataAway = res.result.away;
      this.basketDataHome=res.result.home;
      console.log("Basket Standings data",this.basketDataAway, this.basketDataHome);
    });
  }
  basketballLiveScore(ev:any) {
this.selectField=ev;
    this.basketballService.basketLiveScore().subscribe(res => {
      this.liveBasketScore=res.result;
      console.log("live score of basketball", res);
    });
  }

  basketballMatches(ev:any){
    this.selectField=ev;
    this.basketballService.basketMatchDetails().subscribe(res => {
      this.matchesBasketBall = res.result;
      console.log("Bot Data", this.matchesBasketBall);
    });
  }

basketballTeam(){
  this.basketballService.basketLeagues().subscribe(res => {
    this.leagueBasketBall = res.result;
    console.log("Bot Data", res,this.matchesBasketBall);
  });
}

homeClicked(){
  this.router.navigateByUrl('/home');
}

}
