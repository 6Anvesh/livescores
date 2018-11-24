import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/observable/of";
import "rxjs/add/operator/catch";
import { ApiService } from "./api.service";
import { ErrorObservable } from "rxjs/observable/ErrorObservable";
import { Router } from "../../../../node_modules/@angular/router";

@Injectable()
export class AuthService extends ApiService {
  private _registerUrl = "http://localhost:3000/api/v1/signup";
  private _loginUrl = "http://localhost:3000/api/v1/login";
 
  constructor(private http: HttpClient,private _router: Router) {
    super();
  }

  registerUser(user: any): Observable<any> {
    return this.http
      .post(this._registerUrl, user)
      .map((res: any) => {
        return res;
      })
      .catch(error => {
        return new ErrorObservable(error.error);
      });
  }

  loginUser(user: any): Observable<any> {
    return this.http
      .post(this._loginUrl, user)
      .map((res: any) => {
        return res;
      })
      .catch(error => {
        return new ErrorObservable(error.error);
      });
  }

  logoutUser() {
    localStorage.removeItem("token");
    localStorage.removeItem("userid");
    localStorage.removeItem("username");
    this._router.navigate(["home"]);
  }


  loggedIn() {
    return !!localStorage.getItem("token");
  }
}
