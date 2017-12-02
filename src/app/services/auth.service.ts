import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {
  private url: string = environment.BASE_URL + "/api-token-auth/";
  private headers: Headers = new Headers({'Content-Type': 'application/json'});
  constructor(private http: Http) {}
  login(user): Promise<any> {
    console.log(environment.BASE_URL);
    return this.http.post(this.url, user, {headers: this.headers}).toPromise();
  }
}