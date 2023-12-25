import { Component, OnInit } from '@angular/core';
import {  IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonImg, IonItem, IonLabel, IonInput, IonButton } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-triangulo',
  standalone: true,
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.scss'],
  imports: [FormsModule, CommonModule, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonImg, IonItem, IonLabel, IonInput, IonButton ]
})
export class TrianguloComponent {

  lado1: number | undefined;
  lado2: number | undefined;
  lado3: number | undefined;
  perimetro: number | undefined;
  mostrarResultado: boolean = false;

  calcularPerimetro() {
    if (this.lado1 && this.lado2 && this.lado3) {
      this.perimetro = this.lado1 + this.lado2 + this.lado3;
      this.mostrarResultado = true;
    } else {
      this.perimetro = undefined;
      this.mostrarResultado = false;
    }
  }
  constructor() { }


}
