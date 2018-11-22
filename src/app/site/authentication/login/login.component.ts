import { Component, OnInit, ViewChild } from "@angular/core";

import { Router } from "@angular/router";
import { AuthService } from "./../../services/auth.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  @ViewChild("loginform") LoginForm: NgForm;

  loginUserData = {};

  constructor(private _auth: AuthService, private _router: Router) {}

  ngOnInit() {
    const log = localStorage.getItem("token");
    if (log === "false") {
      // this._router.navigate(["/login"]);
    } else {
      this._router.navigate(["/livescore-info"]);
    }
  }

  loginUser() {
    this._auth.loginUser(this.loginUserData).subscribe(
      res => {
        localStorage.setItem("userid", res._id);
        localStorage.setItem("token", res.token);
        this._router.navigate(["/livescore-info"]);
        // redirect to some page
        window.alert("Logged in successfully!");
      },
      err => {
        window.alert("Please check email/password");
      }
    );
    this.LoginForm.reset();
  }
}
