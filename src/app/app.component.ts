import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
interface Numero {
  giro1: number;
  giro2: number;
  giro3: number;
  giro4: number;
  giro5: number;
}
const ESTRATEGIA: Numero[] = [

];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  estrategia = ESTRATEGIA;
  title = 'SO WHO’S COUNTING';


  number: number;

  teamOne: number[];

  teamSecond: number[];

  strategy: number[][];

  turnRoulette() {
    this.number = Math.round(Math.random() * (9 - 0));


  }

  updateValue() {

    this.estrategia[1].giro1 = this.estrategia[1].giro1 + 1;

  }

  simulate() {
    let filaAfectar = 0;
    let numeroElegir = 0; 


    for (let index = 0; index < 299; index++) {
      filaAfectar = Math.floor((Math.random() * (8)) + 1);
      for (let index = 0; index < 5; index++) {
        numeroElegir =  Math.round(Math.random() * (5));
        ESTRATEGIA[filaAfectar].giro1 = numeroElegir;
      }

    }

  }
  initStrategy() {
    if (ESTRATEGIA.length < 10) {
      for (let index = 0; index < 10; index++) {
        ESTRATEGIA.push({
          giro1: 1,
          giro2: 1,
          giro3: 1,
          giro4: 1,
          giro5: 1
        });
      }
    }
  }
  calculateGanance() {
    console.log("Ella (?) te ama");
  }
}
