import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Http, RequestOptions } from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/add/observable/of";
import "rxjs/add/operator/catch";
import { ErrorObservable } from "rxjs/observable/ErrorObservable";
import { ApiService } from "./api.service";

@Injectable()
export class FootballService extends ApiService {
  private apiKey: String =
    "06a4d6686ffa7ab437cc654889a141ed9eccb63b77c6efd7669591575c0ca55a";
  private newsApi: String = "89ce0fabd78f4353a6ee8ed6f120386a";

  constructor(public _http: Http) {
    super();
  }

  footLiveScore(): Observable<any> {
    return this._http
      .get(
        `https://allsportsapi.com/api/football/?met=Livescore&APIkey=${
          this.apiKey
        }`,
        this.get()
      )
      .map(res => {
        return res;
      })
      .catch(error => {
        return new ErrorObservable(error.error);
      });
  }
  footPlayersDetails(playerName: String): Observable<any> {
    return this._http
      .get(
        `https://allsportsapi.com/api/football/?&met=Players&playerName=${playerName}&APIkey=${
          this.apiKey
        }`,
        this.get()
      )
      .map(res => {
        // console.log("player details are", res);
        return res;
      })
      .catch(error => {
        return new ErrorObservable(error.error);
      });
  }

  footMatchDetails(): Observable<any> {
    return this._http
      .get(
        `https://allsportsapi.com/api/football/?met=Fixtures&APIkey=${
          this.apiKey
        }&from=2018-05-23&to=2018-05-23`
      )
      .map(res => {
        // console.log("Matches data is ", res);
        return res;
      })
      .catch(error => {
        return new ErrorObservable(error.error);
      });
  }

  footStandings(): Observable<any> {
    let leaugeId = 258;
    return this._http
      .get(
        `https://allsportsapi.com/api/football/?&met=Standings&leagueId=${leaugeId}&APIkey=${
          this.apiKey
        }`
      )
      .map(res => {
        // console.log("Rankings of teams in league", res);
        return res;
      })
      .catch(error => {
        return new ErrorObservable(error.error);
      });
  }

  footTopScorers(): Observable<any> {
    let leagueId = 258;
    return this._http
      .get(
        `https://allsportsapi.com/api/football/?&met=Topscorers&leagueId=${leagueId}&APIkey=${
          this.apiKey
        }`
      )
      .map(res => {
        // console.log("Top scorers of teams in league", res);
        return res;
      })
      .catch(error => {
        return new ErrorObservable(error.error);
      });
  }

  footTeams(): Observable<any> {
    let teamId = 2616;
    return this._http
      .get(
        `https://allsportsapi.com/api/football/?&met=Teams&teamId=${teamId}&APIkey=${
          this.apiKey
        }`
      )
      .map(res => {
        // console.log("Team Details", res);
        return res;
      })
      .catch(error => {
        return new ErrorObservable(error.error);
      });
  }

  bbcNews(): Observable<any> {
    return this._http
      .get(
        `https://newsapi.org/v2/top-headlines?sources=bbc-sport&apiKey=${
          this.newsApi
        }`
      )
      .map(res => {
        // console.log("bbc News are", res);
        return res;
      })
      .catch(error => {
        return new ErrorObservable(error.error);
      });
  }
  espnNews(): Observable<any> {
    return this._http
      .get(
        `https://newsapi.org/v2/top-headlines?sources=espn&apiKey=${
          this.newsApi
        }`
      )
      .map(res => {
        // console.log("bbc News are", res);
        return res;
      })
      .catch(error => {
        return new ErrorObservable(error.error);
      });
  }

  footLeagues(): Observable<any> {
    return this._http
      .get(
        `https://allsportsapi.com/api/football/?met=Leagues&APIkey=${
          this.apiKey
        }`
      )
      .map(res => {
        // console.log("Football leagues are", res);
        return res;
      })
      .catch(error => {
        return new ErrorObservable(error.error);
      });
  }
}
