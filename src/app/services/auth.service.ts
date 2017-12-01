import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {
  private BASE_URL: string = 'https://young-eyrie-51496.herokuapp.com';
  private headers: Headers = new Headers({'Content-Type': 'application/json'});
  constructor(private http: Http) {}
  login(user): Promise<any> {
    let url: string = `${this.BASE_URL}/api-token-auth/`;
    return this.http.post(url, user, {headers: this.headers}).toPromise();
  }
}