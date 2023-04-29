import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StorageService } from '../storage.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private ss: StorageService) { }
  intercept(req: HttpRequest<any>,
    next: HttpHandler): Observable<HttpEvent<any>> {
    const idToken = this.ss.getUser().token
    if (idToken) {
      console.log(idToken)
      const cloned = req.clone({
        headers: req.headers.append("Authorization",
          "Bearer " + idToken)
      });


      return next.handle(cloned);
    }
    else {
      console.log("notoken")
      return next.handle(req);
    }
  }
}
