import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  _progreso1: number = 20;
  _progreso2: number = 50;

  constructor() { }

  ngOnInit() {
  }

  Actualizar(event: number) {
    this._progreso1 = event;
  }

  /*CambiarValor(valor: number): void {
    if (this._progreso >= 100 && valor > 0) {
      this._progreso = 100;
      return;
    }

    if (this._progreso <= 0 && valor < 0) {
      this._progreso = 0;
      return;
    }

    this._progreso = this._progreso + valor;
  }*/

}
