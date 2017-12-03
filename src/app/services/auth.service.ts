import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../environments/environment';
import {LocalStorageService, SessionStorage} from 'ngx-webstorage';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  private url: string = environment.BASE_URL + "/api-token-auth/";
  private headers: Headers = new Headers({'Content-Type': 'application/json'});
  public token: string;
  constructor(
  	private http: Http
  ) {
        var token = localStorage.getItem("token");
        this.token = token;
  }
  login(user): Promise<any> {
    console.log(environment.BASE_URL);
    return this.http.post(this.url, user, {headers: this.headers})
    .toPromise();
   //  .map((response: Response)=>{
   //  	console.log("masuk")
   //  	let token = response.json() && response.json().token
   //  	if (token) {
   //          this.token = token;
   //          localStorage.setItem('token', token);
			// // this.storage.store('currentUser', JSON.stringify({ username: user.username, token: token }));                    
   //          // return true to indicate successful login
   //          return true;
   //      } else {
   //          // return false to indicate failed login
   //          return false;
   //      }
   //  });
  }

  public isAuthenticated(): boolean {      
    return this.token ? true : false;
  }

  logout(): void {
    // clear token remove user from local storage to log user out
    this.token = null;
    // this.storage.clear('currentUser');
  }
}