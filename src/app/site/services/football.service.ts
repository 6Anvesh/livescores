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

  constructor(public _http: Http) {
    super();
  }

  liveScore(): Observable<any> {
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
}
