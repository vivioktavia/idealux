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
import {Tenant} from "../../models/tenant";
import {KtpService} from "../../services/ktp.service";

@Component({
  templateUrl: 'debtor_enquiry.component.html',
  providers: [InvoicePaymentService, InvoiceService, LotService, KtpService]
})

export class DebtorEnquiryComponent extends BaseComponent implements OnInit {

  debtorInquiry_form: FormGroup;
  lotResult: Observable<Lot[]>;
  invoices: Invoice[] = [];
  allocs: Alloc[] = [];
  lots: Lot[]=[];
  lot: Lot;
  tenants: Tenant[] = [];
  tag: string ="tenant";
  selected_lot: number;

  constructor(
    private invoicePaymentService: InvoicePaymentService,
    private invoiceService: InvoiceService,
    private lotService: LotService,
    private ktpService: KtpService,
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
    this.lotResult = this.lotService.getLists();
    this.lotResult.subscribe(val => {this.lots = val});
  }

  saveAddItem(): void {
  }


  saveUpdateItem(id): void {
  }

  saveDeleteItem(id): void {
  }

  filterChanged(){
    this.lotService.getById(this.selected_lot).subscribe(lot => {
      console.log(lot)
      this.lot = lot;
      for(let i = 0; i < lot.kks.length; i++) {
        var kk_details = lot.kks[i].kkDetails;
        for(let j = 0; j < kk_details.length; j++) {
          this.ktpService.getById(kk_details[j].ktp).subscribe(data => {
            let tenant = {
              "no_kk": lot.kks[i].kkNo,
              "relation": kk_details[j].familyRelationDescs,
              "nik": kk_details[j].nik,
              "name": data.name,
              "religion": data.religionDescs,
              "birth_date": data.birthDate
            }
            this.tenants.push(tenant)
            if(i == (lot.kks.length - 1)) {
              this.dtTrigger.next();
            }
          });
        }
      }

      this.getInvoice();
      this.getPayment();
    })
  }

  changeTab(param) {
    this.tag = param;
  }

  getTenant() {

  }

  getInvoice(){
    if(this.lot){
      this.invoiceService.getInvoicesbyLot(this.lot.id).subscribe(val => {
        this.invoices = val;
        this.dtTrigger_reserved.next()
      });
    }
  }

  getPayment(){
    if(this.lot){
      this.invoicePaymentService.getAllocsbyLot(this.lot.id).subscribe(val => {
        this.allocs = val;
        this.dtTrigger_reserved2.next()
      });
    }
  }
}
