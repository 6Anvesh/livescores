import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Http, RequestOptions } from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/add/observable/of";
import "rxjs/add/operator/catch";
import { ErrorObservable } from "rxjs/observable/ErrorObservable";
import { ApiService } from "./api.service";
@Injectable()
export class BasketballService extends ApiService {
  private apiKey: String =
    "06a4d6686ffa7ab437cc654889a141ed9eccb63b77c6efd7669591575c0ca55a";

  constructor(public _http: Http) {
    super();
  }

  basketLiveScore(): Observable<any> {
    return this._http
      .get(
        `https://allsportsapi.com/api/basketball/?met=Livescore&APIkey=${
          this.apiKey
        }`,
        this.get()
      )
      .map(res => {
        return res.json()
      })
      .catch(error => {
        return new ErrorObservable(error.error);
      });
  }

  basketLeagues(): Observable<any> {
    return this._http
      .get(
        `https://allsportsapi.com/api/basketball/?met=Leagues&APIkey=${
          this.apiKey
        }`
      )
      .map(res => {
        // console.log("Basket Ball leagues are", res);
        return res.json();
      })
      .catch(error => {
        return new ErrorObservable(error.error);
      });
  }

  basketMatchDetails(): Observable<any> {
    return this._http
      .get(
        `https://allsportsapi.com/api/basketball/?met=Fixtures&APIkey=${
          this.apiKey
        }&from=2018-05-23&to=2018-05-23`
      )
      .map(res => {
        // console.log("Basket Ball Matches are", res);
        return res.json();
      })
      .catch(error => {
        return new ErrorObservable(error.error);
      });
  }
  basketStandings(): Observable<any> {
    let leaugeId = 787;
    return this._http
      .get(
        `https://allsportsapi.com/api/basketball/?&met=Standings&leagueId=${leaugeId}&APIkey=${
          this.apiKey
        }`
      )
      .map(res => {
        // console.log("Rankings of teams in league", res);
        return res.json();
      })
      .catch(error => {
        return new ErrorObservable(error.error);
      });
  }

  basketTeams(): Observable<any> {
    let teamId = 2616;
    return this._http
      .get(
        `https://allsportsapi.com/api/basketball/?&met=Teams&teamId=${teamId}&APIkey=${
          this.apiKey
        }`
      )
      .map(res => {
        // console.log("Team Details", res);
        return res.json();
      })
      .catch(error => {
        return new ErrorObservable(error.error);
      });
  }
}
