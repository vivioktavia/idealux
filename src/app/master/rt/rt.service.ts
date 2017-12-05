import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions, RequestMethod} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {RT} from './rt';

@Injectable()

// Service for products data.
export class RTService {

    constructor(private _http: Http) {}

    readGroup(): Observable<RT[]> {
        return this._http
            .get("http://young-eyrie-51496.herokuapp.com/group/?format=json")
            .map(res => res.json());
    }

    addRT(rt) {
        let headers = new Headers({'Authorization': 'Token b156eb3d1c48875e967a7322cbfdc850ff31642a'});
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append("Access-Control-Allow-Credentials", "true");
        let options = new RequestOptions({method: RequestMethod.Post, headers: headers});
        return this._http.post(
            "http://young-eyrie-51496.herokuapp.com/rts/",
            rt,
            options
        ).map(res => res.json()).catch(this.handleError);;
    }

    getRTByNo(id): Promise<RT> {
        return this._http.get('http://young-eyrie-51496.herokuapp.com/rts/' + id + '/')
            .toPromise()
            .then(response => response.json() || {} as RT)
            .catch(this.handleError);
    }

    updateRT(url, rt) {
        let headers = new Headers({'Authorization': 'Token b156eb3d1c48875e967a7322cbfdc850ff31642a'});
        headers.append("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Headers', 'Content-Type');
        headers.append("Access-Control-Allow-Credentials", "true");
        let options = new RequestOptions({method: RequestMethod.Post, headers: headers});
        return this._http.put(
            url,
            rt,
            options
        ).map(res => res.json()).catch(this.handleErrorObservable);;
    }

    getRTList(): Observable<RT[]> {
        let headers = new Headers({'Authorization': 'Token b156eb3d1c48875e967a7322cbfdc850ff31642a'});
        let options = new RequestOptions({headers: headers});
        return this._http.get('http://young-eyrie-51496.herokuapp.com/rts/', options)
            .map(this.extractData)
    }

    deleteRT(url) {
        let headers = new Headers({'Authorization': 'Token b156eb3d1c48875e967a7322cbfdc850ff31642a'});
        let options = new RequestOptions({headers: headers});
        return this._http.delete("http://young-eyrie-51496.herokuapp.com/rts/" + url, options);
        //        return this._http.delete(url);
    }

    private handleErrorObservable(error: Response | any) {
        return Observable.throw(error.message || error);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    private extractData(res: Response) {
        const body = res.json();
        return body || {};
    }
}