import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import {RWService} from './rw.service';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {RW} from './rw';
import 'rxjs/add/operator/map';

@Component({
    templateUrl: 'rw.component.html',
    providers: [RWService]
})

export class RWComponent implements OnInit {
    url: string = 'https://young-eyrie-51496.herokuapp.com'
    rw_form: FormGroup;
    dtOptions: DataTables.Settings = {};
    dtTrigger: Subject<any> = new Subject();
    result: Observable<RW[]>;
    rws: RW[] = [];
    
    constructor(
        private rwService: RWService,
        formBuilder: FormBuilder,
        private router: Router
    ) {
        this.rw_form = formBuilder.group({
            rwNo: ["", Validators.required],
            rwDescs: ["", ""]
        });
    }

    ngOnInit(): void {
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10
        };
        this.result = this.rwService.getRWList();
        this.result.subscribe(val => {this.rws = val; this.dtTrigger.next()});
    }

    addRW() {
        this.rwService.addRW(this.rw_form.value).subscribe(
            rt => {
                // show an alert to tell the user if product was created or not
                //                console.log(rt);
                // go back to list of products
                //                    this.readGroup();
            },
            error => console.log(error)
        );
    }



}


