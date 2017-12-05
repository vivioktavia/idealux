import {Subject} from 'rxjs/Subject';
import {Router, ActivatedRoute} from '@angular/router';
import {Component, OnInit} from '@angular/core';

@Component({
    templateUrl: ''
})
export class BaseComponent {

    //constant
    protected NEW_CODE: string = "new";

    dtOptions: DataTables.Settings = {};
    dtTrigger: Subject<any> = new Subject();
    sub: any;
    method: Method;
    url: string;
    protected router: Router;
    protected route: ActivatedRoute    
    constructor(
            ) {
//        this.sub = this.route.params.subscribe(para        ms => {
//            var id = params        ['id'];
//            console.l        og(id);
//            if         (!id) {
//                this.method = Metho        d.List;
//            } else if (id == this.NEW_        CODE) {
//                this.method = Meth        od.Add;
//            }         else {
//                this.method = Method.        Update;
//                    }
//        })
        this.method = Method.List;
    }
    
    
}

export enum Method {
    Add = 0,
    Update = 1,
    List = 2
}