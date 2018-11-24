import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { CricketService } from "../../services/cricket.service";
import { Router } from "../../../../../node_modules/@angular/router";
import { FootballService } from "../../services/football.service";

declare var $;

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  newsData: any=[];
 


  constructor(public router: Router,private footBallServices:FootballService) {
this.newsapi();
this.espnNews();
  }

  ngOnInit() {
    $('.ui.dropdown').dropdown();
  
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
  this.newsData.push(response.articles[0]);
  this.newsData.push(response.articles[1]);
  this.newsData.push(response.articles[2]);
  console.log('bbc',this.newsData);
});
  }
  espnNews(){
    this.footBallServices.espnNews().subscribe(response => {
  this.newsData.push(response.articles[0]);
  this.newsData.push(response.articles[1]);
  this.newsData.push(response.articles[2]);
  console.log('espn',this.newsData);
    });
      }
  }

