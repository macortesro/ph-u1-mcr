import { Component } from '@angular/core';
import { IonList, IonItem, IonSelect, IonSelectOption, IonText, IonHeader, IonToolbar, IonTitle, IonContent, SelectChangeEventDetail } from '@ionic/angular/standalone';
import { CirculoComponent } from '../circulo/circulo.component';
import { TrianguloComponent } from '../triangulo/triangulo.component';
import { IonSelectCustomEvent } from '@ionic/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonList, IonItem, IonSelect, IonSelectOption, IonText, IonHeader, IonToolbar, IonTitle, IonContent, CirculoComponent, TrianguloComponent, CommonModule],
})
export class HomePage {
  
  tipoFigura:string = ""

  constructor() {}

  esCirculo() { return this.tipoFigura == "circulo"}
  esTriangulo() { return this.tipoFigura == "triangulo"}

  manejarSeleccionTipoFigura($event: IonSelectCustomEvent<SelectChangeEventDetail<any>>) {
    this.tipoFigura = $event.detail.value
    
  }
}
