import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions, RequestMethod} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import {RW} from './rw';

@Injectable()

// Service for products data.
export class RWService {

    constructor(private _http: Http) {}

    addRW(rw) {
        let headers = new Headers({'Authorization': 'Token b156eb3d1c48875e967a7322cbfdc850ff31642a'});
        let options = new RequestOptions({method: RequestMethod.Post, headers: headers});
        console.log(rw)
        return this._http.post(
            "http://young-eyrie-51496.herokuapp.com/rws/",
            rw,
            options
        ).map(res => res.json()).catch(this.handleError);;
    }

    getRWByNo(id): Promise<RW> {
        return this._http.get('http://young-eyrie-51496.herokuapp.com/rws/' + id + '/')
            .toPromise()
            .then(response => response.json() || {} as RW)
            .catch(this.handleError);
    }

    updateRW(id, rw) {
        let headers = new Headers({'Authorization': 'Token b156eb3d1c48875e967a7322cbfdc850ff31642a'});
        let options = new RequestOptions({headers: headers});
        return this._http.put(
            'http://young-eyrie-51496.herokuapp.com/rws/' + id + "/",
            rw,
            options
        ).map(res => res.json()).catch(this.handleErrorObservable);;
    }

    getRWList(): Observable<RW[]> {
        return this._http.get('http://young-eyrie-51496.herokuapp.com/rws/')
            .map(this.extractData)
    }

    deleteRW(url) {
        let headers = new Headers({'Authorization': 'Token b156eb3d1c48875e967a7322cbfdc850ff31642a'});
        let options = new RequestOptions({headers: headers});
        return this._http.delete("http://young-eyrie-51496.herokuapp.com/rws/" + url, options);
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