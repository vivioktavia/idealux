import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';

import {DataRoutingModule} from './data-routing.module';
import {RwComponent} from './rw/rw.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
    imports: [
        DataRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        HttpModule
    ],
    declarations: [
        RwComponent
    ]
})
export class DataModule {}
