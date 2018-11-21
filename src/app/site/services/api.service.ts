import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators/catchError';
import { environment } from '../../../environments/environment';
import { RequestOptions,Headers } from '@angular/http';

@Injectable()
export class ApiService {
  headers:any;
  constructor(
  ) {
    this.headers = new Headers({ 'Content-Type': 'application/json'});
   }


   protected post() {
    return new RequestOptions({ headers: this.headers, method: 'post' });
  }

  protected get() {
    return new RequestOptions({ headers: this.headers });
  }

  protected put() {

    return new RequestOptions({ headers: this.headers, method: 'put' });
  }

  protected patch() {
    return new RequestOptions({ headers: this.headers, method: 'patch' });
  }






}