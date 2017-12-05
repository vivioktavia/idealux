import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {GroupComponent} from './group/group.component';
import {RTComponent} from './rt/rt.component';
import {RWComponent} from './rw/rw.component';
import {KKComponent} from './kk/kk.component';
import {KKDetailsComponent} from './kk/kk_details.component';

const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Master'
        },
        children: [
            {path: 'group', component: GroupComponent, data: {title: 'Group'}},
            {path: 'group/:id', component: GroupComponent, data: {title: 'Group'}},
            {path: 'group/new', component: GroupComponent, data: {title: 'Group'}},

            {path: 'rw', component: RWComponent, data: {title: 'RW'}},
            {path: 'rw/:id', component: RWComponent, data: {title: 'RW'}},
            {path: 'rw/new', component: RWComponent, data: {title: 'RW'}},

            {path: 'rt', component: RTComponent, data: {title: 'RT'}},
            {path: 'rt/:id', component: RTComponent, data: {title: 'RT'}},
            {path: 'rt/new', component: RTComponent, data: {title: 'RT'}},

            {path: 'kk', component: KKComponent, data: {title: 'KK'}},
            {path: 'kk/:id', component: KKComponent, data: {title: 'KK'}},
            {path: 'kk/new', component: KKComponent, data: {title: 'KK'}},

            {path: 'kk_details', component: KKComponent, data: {title: 'KK'}},
            {path: 'kk_details/:id', component: KKComponent, data: {title: 'KK'}},
            {path: 'kk_details/new', component: KKComponent, data: {title: 'KK'}}

        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MasterRoutingModule {}
