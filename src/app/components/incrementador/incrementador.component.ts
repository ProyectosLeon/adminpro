import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @Input('titulo') _leyenda: string = 'Leyenda';
  @Input('valorInicial') _progreso: number = 50;
  @Output('actualizaValor') _cambioValor: EventEmitter<number> = new EventEmitter();

  @ViewChild('txtProgreso') txtProgreso: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  OnChange(nuevoValor: number) {

    if (nuevoValor >= 100) {
      this._progreso = 100;
    } else if (nuevoValor <= 0) {
      this._progreso = 0;
    } else {
      this._progreso = nuevoValor;
    }

    this.txtProgreso.nativeElement.value = this._progreso;
    this._cambioValor.emit(this._progreso);
  }

  CambiarValor(valor: number): void {
    if (this._progreso >= 100 && valor > 0) {
      this._progreso = 100;
      return;
    }

    if (this._progreso <= 0 && valor < 0) {
      this._progreso = 0;
      return;
    }

    this._progreso = Number(this._progreso) + Number(valor);

    this._cambioValor.emit(this._progreso);

    this.txtProgreso.nativeElement.focus();
  }
}
