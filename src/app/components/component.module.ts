import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

import { IncrementadorComponent } from './incrementador/incrementador.component';
import { GraficodonaComponent } from './graficodona/graficodona.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule
  ],
  declarations: [
    IncrementadorComponent,
    GraficodonaComponent,
  ],
  exports: [
    IncrementadorComponent,
    GraficodonaComponent
  ]
})
export class ComponentModule { }
