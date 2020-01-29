import { Component, OnInit, AfterViewInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";
@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit,AfterViewInit {
  registerUserData = {};
  usernameExists:Boolean=false;
  constructor(private _auth: AuthService, private _router: Router) {}

  ngOnInit() {

  }
  ngAfterViewInit(){
        const log = localStorage.getItem("token");
    if (log === null) {
this._router.navigate(['signup'])
    } else {
      this._router.navigate(["/dashboard"]);
    }
  }

  uniqueUserName(username:string){
    this.usernameExists=false;
    this._auth.uniqueUserName(username).subscribe(
      res => {
        if(res.success){
          this.usernameExists=true;
        }
        console.log("Res", res);
        // this._router.navigate(['/login'])
      },
      err => console.log(err)
    );
  }
  

  registerUser() {
    this._auth.registerUser(this.registerUserData).subscribe(
      res => {
        console.log("Res", res);
        this._router.navigate(['/login'])
      },
      err => console.log(err)
    );
  }
}
