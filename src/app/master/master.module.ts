import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';

import {MasterRoutingModule} from './master-routing.module';
import {GroupComponent} from './group/group.component';
import {RTComponent} from './rt/rt.component';
import {RWComponent} from './rw/rw.component';
import {KKComponent} from './kk/kk.component';
import {DataTablesModule} from 'angular-datatables';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

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
        GroupComponent,
        RTComponent,
        RWComponent,
        KKComponent
    ]
})
export class MasterModule {}
