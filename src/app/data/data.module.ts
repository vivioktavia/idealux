import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';

import {DataRoutingModule} from './data-routing.module';
import {RwComponent} from './rw/rw.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
    imports: [
        DataRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        HttpModule,
        NgxDatatableModule
    ],
    declarations: [
        RwComponent
    ]
})
export class DataModule {}
