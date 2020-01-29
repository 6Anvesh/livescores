import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { CricketService } from "../../services/cricket.service";
import { Router } from "../../../../../node_modules/@angular/router";
import { FootballService } from "../../services/football.service";
import { AuthService } from "../../services/auth.service";

declare var $;

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  newsData: any=[];
  p: Number=1;
  authValue: any;


  constructor(public router: Router,private footBallServices:FootballService,
  private _auth: AuthService) {
// this.newsapi();
// this.espnNews();
  }

  ngOnInit() {
    $('.ui.dropdown').dropdown();
    this.authValue=this._auth.loggedIn();
  
  }

  signupClicked() {
    this.router.navigateByUrl('/signup');
  }
  loginClicked() {
    this.router.navigateByUrl('/login');
  }
  cricket() {
    this.router.navigateByUrl('/circket');
  }

  footBall() {
    this.router.navigateByUrl('/football');
  }
  basketBall() {
    this.router.navigateByUrl('/basketball');
  }

  newsapi(){
this.footBallServices.bbcNews().subscribe(response => {

  this.newsData.push(...response.articles);
});
  }
  espnNews(){
    this.footBallServices.espnNews().subscribe(response => {
  this.newsData.push(...response.articles);
    });
      }

      logout(){
        this.authValue=false;
        this._auth.logoutUser();
      }
  }

