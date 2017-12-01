import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {
  private BASE_URL: string = environment.BASE_URL;
  private headers: Headers = new Headers({'Content-Type': 'application/json'});
  constructor(private http: Http) {}
  login(user): Promise<any> {
    console.log(environment.BASE_URL);
    let url: string = `${this.BASE_URL}/api-token-auth/`;
    return this.http.post(url, user, {headers: this.headers}).toPromise();
  }
}