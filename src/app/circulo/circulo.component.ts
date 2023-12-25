import { Component, OnInit } from '@angular/core';
import { IonLabel, IonNote, IonItem, IonButton, IonInput, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonCardSubtitle, IonImg } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-circulo',
  standalone: true,
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss'],
  imports: [  IonLabel, IonNote, CommonModule, FormsModule, IonCard, IonCardHeader, IonCardContent,IonCardTitle,IonCardSubtitle, IonImg, IonInput, IonButton, IonItem]
})

export class CirculoComponent {
  
  
  radio: number | undefined;
  perimetro: number | undefined;
  mostrarResultado: boolean = false;

  calcularPerimetro() {
    if (this.radio) {
      this.perimetro = 2 * Math.PI * this.radio;
      this.mostrarResultado = true;
    } else {
      this.perimetro = undefined;
      this.mostrarResultado = false;
    }
  }
  
  constructor() { }

 
}
