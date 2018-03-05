import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { PageRouterModule } from './page.router';
import { ComponentModule } from '../components/component.module';

import { PageComponent } from './page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';

@NgModule({
  declarations: [
    PageComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
  ],
  exports: [
    DashboardComponent,
  ],
  imports: [
    PageRouterModule,
    SharedModule,
    ComponentModule,
  ],
})
export class PageModule { }
