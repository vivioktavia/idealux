import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';

import {MasterRoutingModule} from './master-routing.module';
import {GroupComponent} from './group/group.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
    imports: [
        MasterRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        HttpModule
    ],
    declarations: [
        GroupComponent
    ]
})
export class MasterModule {}
