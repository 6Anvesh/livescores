import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/observable/of";
import "rxjs/add/operator/catch";
import { ApiService } from "./api.service";
import { ErrorObservable } from "rxjs/observable/ErrorObservable";

@Injectable()
export class AuthService extends ApiService {
  private _registerUrl = "http://localhost:3000/api/v1/signup";
  private _loginUrl = "http://localhost:3000/api/v1/login";
  public user = {
    name: ""
  };

  constructor(private http: HttpClient) {
    super();
  }

  registerUser(user: any): Observable<any> {
    console.log("User", user);
    return this.http
      .post(this._registerUrl, user)
      .map((res: any) => {
        return res.json();
      })
      .catch(error => {
        return new ErrorObservable(error.error);
      });
  }

  loginUser(user: any): Observable<any> {
    // console.log("suer", user);
    return this.http
      .post(this._loginUrl, user)
      .map((res: any) => {
        console.log(res);
        return res;
      })
      .catch(error => {
        // console.log("sdsdssdds", error);
        return new ErrorObservable(error.error);
      });
  }

  logoutUser() {
    localStorage.removeItem("token");
    localStorage.removeItem("userid");
    localStorage.removeItem("username");
    // this._router.navigate(["/home"]);
  }

  // getToken() {
  //   return localStorage.getItem("token");
  // }

  loggedIn() {
    return !!localStorage.getItem("token");
  }
}
