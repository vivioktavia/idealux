import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions, RequestMethod} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Subject} from 'rxjs/Subject';
import {RW} from './rw';

@Injectable()

// Service for products data.
export class RWService {
      
    constructor(private _http: Http) {}

    readRW(): Observable<RW[]> {
        return this._http
            .get("http://young-eyrie-51496.herokuapp.com/group/?format=json")
            .map(res => res.json());
    }

    addRW(rw) {
        let headers = new Headers({'Authorization': 'Token b156eb3d1c48875e967a7322cbfdc850ff31642a'});
        headers.append("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Headers', 'Content-Type');
        headers.append("Access-Control-Allow-Credentials", "true");
        let options = new RequestOptions({method: RequestMethod.Post, headers: headers});
        return this._http.post(
            "http://young-eyrie-51496.herokuapp.com/rws/",
            rw,
            options
        ).map(res => res.json()).catch(this.handleErrorObservable);;
    }

    getRWList() : Observable<RW[]>{
        return this._http.get('http://young-eyrie-51496.herokuapp.com/rws/')
            .map(this.extractData)
    }

    private handleErrorObservable(error: Response | any) {
        return Observable.throw(error.message || error);
    }

    private extractData(res: Response) {
        const body = res.json();
        return body || {};
    }
}