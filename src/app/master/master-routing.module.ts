import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {GroupComponent} from './group/group.component';
import {RTComponent} from './rt/rt.component';
import {RWComponent} from './rw/rw.component';

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
            {path: 'rt/new', component: RTComponent, data: {title: 'RT'}}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MasterRoutingModule {}
