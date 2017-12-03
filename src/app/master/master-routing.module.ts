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
            {
                path: 'group',
                component: GroupComponent,
                data: {
                    title: 'Group'
                }
            },
            {
                path: 'rw',
                component: RWComponent,
                data: {
                    title: 'RW'
                },
                children: [
                    {path: "new", component: RWComponent},
                    {path: ":id", component: RWComponent}
                ]
            },
            {
                path: 'rt',
                component: RTComponent,
                data: {
                    title: 'RT'
                }
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MasterRoutingModule {}
