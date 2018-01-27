import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions, RequestMethod} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise'
import {Invoice} from '../models/invoice';
import {Alloc} from '../models/alloc';
import {environment} from '../../environments/environment';

@Injectable()

export class InvoicePaymentService {
    private baseurl: string = environment.BASE_URL;
    private url: string = this.baseurl + "/paymentinv/";
    private token: string = environment.token;

    constructor(private _http: Http) {}

    private extractData(res: Response) {
        const body = res.json().data;
        return body || {};
    }

    private handleErrorObservable(error: Response | any) {
        return Observable.throw(error.message || error);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    savePayment(data){
        let headers = new Headers({'Authorization': 'Token ' + this.token});
        let options = new RequestOptions({headers: headers});
        return this._http.post(this.url,
            data,
            options
        ).map(this.extractData);
    }

    getAllocsbyLot(lot): Observable<Alloc[]>{
        let headers = new Headers({'Authorization': 'Token ' + this.token});
        let options = new RequestOptions({headers: headers});
        return this._http.get(this.baseurl + "/getallocsbylot/?lot=" + lot , options)
            .map(this.extractData)
    }
}