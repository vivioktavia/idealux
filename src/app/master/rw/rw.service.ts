import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions, RequestMethod} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Group} from './group';

@Injectable()

// Service for products data.
export class GroupService {

    constructor(private _http: Http) {}

    readGroup(): Observable<Group[]> {
        return this._http
            .get("http://young-eyrie-51496.herokuapp.com/group/?format=json")
            .map(res => res.json());
    }

    addGroup(group){
        console.log(group);
//        this.readGroup();
        let headers = new Headers({'Authorization': 'Token b156eb3d1c48875e967a7322cbfdc850ff31642a'});
        headers.append("Content-Type","application/json");
        headers.append('Access-Control-Allow-Headers', 'Content-Type');        
        headers.append('Access-Control-Allow-Methods','POST');
        headers.append("Access-Control-Allow-Origin", "http://localhost:4200/");
        headers.append("Access-Control-Allow-Methods", "*");
        headers.append("Access-Control-Allow-Credentials", "true");
        let options = new RequestOptions({method: RequestMethod.Post, headers: headers});
        return this._http.post(
            "https://young-eyrie-51496.herokuapp.com/groups/",
            options
        ).map(res => res.json());
    }
}