import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { CricketService } from "../../services/cricket.service";
import { Router } from "../../../../../node_modules/@angular/router";

declare var $;

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
 


  constructor(public router: Router) {

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


}
