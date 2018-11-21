import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { ApiService } from './api.service';

@Injectable()
export class CricketService extends ApiService{

  private apikey:string="m0MGPXsS7zaEnUzvWnQa6eNvi6J3";
  constructor(private http:Http) { 
    super();
  }

  cricketapi(selectedText :any): Observable<any>{
    console.log('api',this.apikey);
    return this.http.get(`https://cricapi.com/api/${selectedText}?apikey=${this.apikey}`,this.get()).map((res)=>{
      console.log('cricket api',selectedText,res);
      return res.json()
    }).catch((error)=>{
      return new ErrorObservable(error.error);
    })
  }




}

