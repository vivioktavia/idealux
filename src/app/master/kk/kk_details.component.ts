import {BaseComponent} from '../base.component';
import {IBaseInterface} from '../base.interface';
import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {FormGroup, Validators, FormBuilder} from '@angular/forms';

import {KKDetailsService} from '../../services/kk_details.service';
import {Observable} from 'rxjs/Observable';
import {KK} from '../../models/kk';

@Component({
    templateUrl: 'kk.component.html',
    providers: [KKDetailsService]
})

export class KKDetailsComponent extends BaseComponent implements OnInit, IBaseInterface {

    kk_form: FormGroup;
    result: Observable<KK[]>;
    kks: KK[] = [];
    data: KK;

    constructor(
        private kkDetailsService: KKDetailsService,        
        private routerKK: Router,
        private routeKK: ActivatedRoute,
        private toastrKK: ToastrService,
        private formBuilder: FormBuilder
    ) {
        super(routerKK, routeKK, toastrKK)
        this.router = routerKK
        this.route = routeKK
        this.toastr = toastrKK
        this.IService = this
        this.kk_form = formBuilder.group({
            kkNo: ["", Validators.required],
            address: ["", Validators.required],
            lot: ["", Validators.required]
        });

        this.url = "master/kk";
    }

    ngOnInit(): void {
        this.init();
        if (this.method == this.ACTION_UPDATE || this.method == this.ACTION_ADD) {
            if (this.method == this.ACTION_UPDATE) {
                this.kkDetailsService.getKKByNo(this.id).then(data => {
                    this.data = data;
                    this.kk_form = this.formBuilder.group({
                        kkNo: [this.data.rtNo, Validators.required],
                        address: [this.data.address, Validators.required],
                        lotNo: [this.data.lot, Validators.required]
                    });
                });
            }
        } else {
            this.result = this.kkDetailsService.getKKList();
            this.result.subscribe(val => {this.kks = val; this.dtTrigger.next()});
        }
    }

    saveAddItem(): void {
        this.kkDetailsService.addKK(this.kk_form.value).subscribe(
            error => console.log(error)
        );
    }

    saveUpdateItem(url): void {
        this.kkDetailsService.updateKK(url, this.kk_form.value).subscribe(
            error => console.log(error)
        );
    }

    saveDeleteItem(url): void {
        if (confirm("Apakah Anda yakin akan menghapus data")) {
            this.kkDetailsService.deleteKK(url).subscribe(
                error => console.log(error)
            );
            //            this.result = this.rwService.getRWList();
            //            this.result.subscribe(val => {this.rws = val; this.dtTrigger.next()});
        };
    }


}