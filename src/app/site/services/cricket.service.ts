import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { ApiService } from './api.service';

@Injectable()
export class CricketService extends ApiService{
   playerData:EventEmitter<any> = new EventEmitter();
  private apikey:string="m0MGPXsS7zaEnUzvWnQa6eNvi6J3";
  constructor(private http:Http) { 
    super();
  }

  cricketapi(selectedText :any): Observable<any>{
    return this.http.get(`https://cricapi.com/api/${selectedText}?apikey=${this.apikey}`,this.get()).map((res)=>{
      return res.json()
    }).catch((error)=>{
      return new ErrorObservable(error.error);
    })
  }

  getplayerData(){
return this.playerData;
  }
  
  playerStats(pid :number): Observable<any>{
    return this.http.get(`https://cricapi.com/api/playerStats?apikey=${this.apikey}&pid=${pid}`,this.get()).map((res)=>{
      return res.json()
    }).catch((error)=>{
      return new ErrorObservable(error.error);
    })
  }

  playerFinder(name :string): Observable<any>{
    return this.http.get(`https://cricapi.com/api/playerFinder?apikey=${this.apikey}&name=${name}`,this.get()).map((res)=>{
      return res.json()
    }).catch((error)=>{
      return new ErrorObservable(error.error);
    })
  }


}

