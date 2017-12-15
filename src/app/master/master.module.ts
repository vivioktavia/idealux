import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';

import {MasterRoutingModule} from './master-routing.module';
import {BaseComponent} from './base.component';
import {GroupComponent} from './group/group.component';
import {RTComponent} from './rt/rt.component';
import {RWComponent} from './rw/rw.component';
import {KKComponent} from './kk/kk.component';
import {KKDetailsComponent} from './kk/kk_details.component';
import {BlockComponent} from './block/block.component';
import {LotComponent} from './lot/lot.component';
import {KtpComponent} from './ktp/ktp.component';
import {BankComponent} from './bank/bank.component';
import {DocprefixComponent} from './docprefix/docprefix.component';
import {DataTablesModule} from 'angular-datatables';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ChargeComponent} from './charge/charge.component';
import {TrxtypeComponent} from './trxtype/trxtype.component';

@NgModule({
    imports: [
        MasterRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        HttpModule,
        DataTablesModule
    ],
    declarations: [
        BaseComponent,
        GroupComponent,
        RTComponent,
        RWComponent,
        KKComponent,
        KKDetailsComponent,
        BlockComponent,
        LotComponent,
        KtpComponent,
        BankComponent,
        DocprefixComponent,
        ChargeComponent,
        TrxtypeComponent
    ]
})
export class MasterModule {}
