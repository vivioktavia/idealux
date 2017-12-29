import {BaseComponent} from '../base.component';
import {IBaseInterface} from '../base.interface';
import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {Invoice} from '../../models/invoice';
import {InvoiceService} from '../../services/invoice.service';
import {Charge} from '../../models/charge';
import {ChargeService} from '../../services/charge.service';

@Component({
    templateUrl: 'invoice.component.html',
    providers: [InvoiceService, ChargeService]
})

export class InvoiceComponent extends BaseComponent implements OnInit {
    
    invoice_form: FormGroup;
    result: Observable<Invoice[]>;
    invoice: Invoice[] = [];
    chargeResult: Observable<Charge[]>;
    charges: Charge[] = [];

    constructor(
        private invoiceService : InvoiceService,
        private chargeService : ChargeService,
        private routerInvoice: Router,
        private routeInvoice: ActivatedRoute,
        private toastrInvoice : ToastrService,
        private formBuilder: FormBuilder
    ) {
        super(routerInvoice, routeInvoice, toastrInvoice)
        this.router = routerInvoice;
        this.route = routeInvoice;
        this.toastr = toastrInvoice;
        this.IService = this;
        this.invoice_form = formBuilder.group({
            charge: ["", Validators.required],
            docDate: [new Date((new Date()).setHours(0, 0, 0, 0)), Validators.required]
        });
        
        this.url = "master/invoice";
    }

    ngOnInit(): void {
        
        this.init();
        this.getCharges();
        console.log(this.invoice_form)
        console.log(new Date((new Date()).setHours(0, 0, 0, 0)))
        // if (this.method == this.ACTION_UPDATE) {
        //     this.bankService.getBank(this.id).then(data => {
        //         this.data = data;
        //         this.invoice_form = this.formBuilder.group({
        //             bankCd: [this.data.bankCd, Validators.required],
        //             descs: [this.data.descs, Validators.required],
        //             bankAccount: [this.data.bankAccount, Validators.required],
        //         });
        //     });
        // } else {
        //     this.result = this.bankService.getBanks();
        //     this.result.subscribe(val => {this.banks = val; this.dtTrigger.next()});
        // }
    }

    getCharges() {
        this.chargeResult = this.chargeService.getCharges();
        this.chargeResult.subscribe(val => {this.charges = val});
    }

    saveAddItem(): void {
        // this.blockService.addBlock(this.block_form.value).subscribe(
        //     error => console.log(error)
        // );
    }

    saveUpdateItem(id): void {
        // this.blockService.updateBlock(id, this.block_form.value).subscribe(
        //     error => console.log(error)
        // );
    }

    saveDeleteItem(id): void {
        // if (confirm("Apakah Anda yakin akan menghapus data")) {
        //     this.blockService.deleteBlock(id).subscribe(
        //         error => console.log(error)
        //     );
        // };
    }
}


