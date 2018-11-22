import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";
@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
  registerUserData = {};
  constructor(private _auth: AuthService, private _router: Router) {}

  ngOnInit() {
    const log = localStorage.getItem("token");
    if (log === "false") {
      
    } else {
      this._router.navigate(["/livescore-info"]);
    }
  }

  registerUser() {
    this._auth.registerUser(this.registerUserData).subscribe(
      res => {
        console.log("Res", res);
        // this._router.navigate(['/special'])
      },
      err => console.log(err)
    );
  }
}