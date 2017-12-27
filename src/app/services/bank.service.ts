import {Injectable} from '@angular/core';
import {BaseService} from './base.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise'
import {Bank} from '../models/bank';


@Injectable()

export class BankService extends BaseService {
    //    private token: string = environment.token;
    protected url = this.url + "/banks/";

    getBanks(): Observable<Bank[]> {
        return this.httpGet(this.url)
            .map(this.extractData)
    }

    getBank(id): Promise<Bank> {
        return this.httpGet(this.url + id + '/')
            .toPromise()
            .then(response => response.json() || {} as Bank)
            .catch(this.handleError);
    }

    addBank(bank) {
        return this.httpPost(
            this.url,
            bank
        ).map(res => res.json()).catch(this.handleError);;
    }

    updateBank(id, bank) {
        return this.httpPut(
            this.url + id + "/",
            bank
        ).map(res => res.json()).catch(this.handleErrorObservable);;
    }

    deleteBank(id) {
        return this.httpDelete(this.url + id + "/");
    }
}