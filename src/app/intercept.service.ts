import { Injectable } from '@angular/core';
import {HttpInterceptor, HttpRequest} from '@angular/common/http';
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class InterceptService implements HttpInterceptor {

  constructor() { }
  intercept(req, next) {
    const creq = req.clone({
      setHeaders: {
        Authorization: 'key'
      }
    });
   return next.handle(creq);
  }
}
