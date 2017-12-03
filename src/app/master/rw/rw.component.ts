import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Location} from "@angular/common";
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import {RWService} from './rw.service';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {RW} from './rw';
import 'rxjs/add/operator/map';

export enum Method {
    Add = 0,
    Update = 1,
    List = 2
};
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
    method: Method;
    location: Location;
    private sub: any;
    
    constructor(
        private rwService: RWService,
        formBuilder: FormBuilder,
        private router: Router,
        private route: ActivatedRoute
    ) {
        this.rw_form = formBuilder.group({
            rwNo: ["", Validators.required],
            rwDescs: ["", ""]
        });


    }

    ngOnInit(): void {

        this.sub = this.route.params.subscribe(params => {
            var id = params['id'];
            
            console.log(params);
            if (!id) {
                this.method = Method.List;
            } else {
                this.result = this.rwService.getRWByNo(id);
                this.rws = this.result[0];
                this.method = Method.List;
                console.log(id);
            }

        })


        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10
        };
        this.result = this.rwService.getRWList();
        this.result.subscribe(val => {this.rws = val; this.dtTrigger.next()});
    }

    callForm(id?) {

        if (id) {
            this.router.navigate(['master/rw/', id]);
        } else {
            this.router.navigate(['/master/rw/new']);
        }
        location.reload();
    }

    addRW() {
        console.log(this.rw_form.value);
        this.rwService.addRW(this.rw_form.value).subscribe(
            error => console.log(error)
        );
    }

    updateRW(url) {
        this.rwService.updateRW(url, this.rw_form.value).subscribe(
            error => console.log(error)
        );
    }

    deleteRW(url) {
        if (confirm("Apakah Anda yakin akan menghapus data")) {
            this.rwService.deleteRW(url).subscribe(
                rw => {
                },
                error => console.log(error)
            );
            this.result = this.rwService.getRWList();
            this.result.subscribe(val => {this.rws = val; this.dtTrigger.next()});
        };
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

}


