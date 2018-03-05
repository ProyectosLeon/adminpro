import { Component, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-graficodona',
  templateUrl: './graficodona.component.html',
  styles: []
})
export class GraficodonaComponent implements OnInit {

  @Input('labels') doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  @Input('data') doughnutChartData: number[] = [350, 450, 100];
  @Input('type') doughnutChartType: string = 'doughnut';

  constructor() { }

  ngOnInit() {
  }

}
