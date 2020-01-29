import { Component, OnInit, ViewChild } from "@angular/core";

import { Router } from "@angular/router";
import { AuthService } from "./../../services/auth.service";
import { NgForm } from "@angular/forms";
import { UserService } from "../../services/user.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  @ViewChild("loginform") LoginForm: NgForm;

  loginUserData = {};

  constructor(private _auth: AuthService,private _userService:UserService ,private _router: Router) { }

  ngOnInit() {
    const log = localStorage.getItem("token");
    if (log === "false") {
      this._router.navigate(["/signup"]);
    } else {
      this._router.navigate(["/dashboard"]);
    }
  }

  loginUser() {
    this._auth.loginUser(this.loginUserData).subscribe(
      res => {
        this._userService.userData=res.username;
        localStorage.setItem("userid", res._id);
        localStorage.setItem("token", res.token);
        window.alert("Logged in successfully!");
        this._router.navigate(["/dashboard"]);
      },
      err => {
        window.alert("Please check email/password");
      }
    );
    this.LoginForm.reset();
  }
}
