import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PageComponent } from './page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';

const appRoutes2: Routes = [
  {
    path: '',
    component: PageComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'progress',
        component: ProgressComponent,
      },
      {
        path: 'graficas1',
        component: Graficas1Component,
      },
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(appRoutes2),
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})

export class PageRouterModule { }
