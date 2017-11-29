import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RwComponent } from './rw/rw.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Data'
    },
    children: [
      {
        path: 'rw',
        component: RwComponent,
        data: {
          title: 'Rw'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataRoutingModule {}
