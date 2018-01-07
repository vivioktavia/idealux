import {BaseComponent} from '../base.component';
import {IBaseInterface} from '../base.interface';
import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {Invoice} from '../../models/invoice';
import {Alloc} from '../../models/alloc';
import {Lot} from '../../models/lot';
import {InvoicePaymentService} from '../../services/invoice_payment.service';
import {InvoiceService} from '../../services/invoice.service';
import {LotService} from '../../services/lot.service';

@Component({
    templateUrl: 'debtor_enquiry.component.html',
    providers: [InvoicePaymentService, InvoiceService, LotService]
})

export class DebtorEnquiryComponent extends BaseComponent implements OnInit {

    debtorInquiry_form: FormGroup;
    lotResult: Observable<Lot[]>;
    invoices: Invoice[] = [];
    allocs: Alloc[] = [];
    lots: Lot[]=[];
    lot: Lot;

    constructor(
        private invoicePaymentService: InvoicePaymentService,
        private invoiceService: InvoiceService,
        private lotService: LotService,
        private routerDebtorEnquiry: Router,
        private routeDebtorEnquiry: ActivatedRoute,
        private toastrDebtorEnquiry: ToastrService,
        private formBuilder: FormBuilder
    ) {
        super(routerDebtorEnquiry, routeDebtorEnquiry, toastrDebtorEnquiry)
        this.router = routerDebtorEnquiry;
        this.route = routeDebtorEnquiry;
        this.toastr = toastrDebtorEnquiry;
        this.IService = this;
        this.debtorInquiry_form = formBuilder.group({
            lot: [this.lot, Validators.required]
        });
        this.url = "master/debtorinquiry";
    }

    ngOnInit(): void {

        this.init();
        this.getLots();
    }

    getLots() {
        this.lotResult = this.lotService.getLotList();
        this.lotResult.subscribe(val => {this.lots = val});
    }

    saveAddItem(): void {
    }

    saveUpdateItem(id): void {
    }

    saveDeleteItem(id): void {
    }

    filterChanged(selectedValue){
        console.log('value is ',selectedValue);
    }

    getInvoice(){
        if(this.lot){
            this.invoiceService.getInvoicesbyLot(this.lot.id).subscribe(
            val => {this.invoices = val; this.dtTrigger.next()});
        }
    }

    getPayment(){
        if(this.lot){
            this.invoicePaymentService.getAllocsbyLot(this.lot.id).subscribe(
            val => {this.allocs = val; this.dtTrigger.next()});
        }
    }
}


