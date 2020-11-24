import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
interface Numero {
  giro1: number;
  giro2: number;
  giro3: number;
  giro4: number;
  giro5: number;
}
let ESTRATEGIA: Numero[] = [

];
let ESTRATEGIA_COPIA: Numero[] = [

];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  estrategia = ESTRATEGIA_COPIA;
  title = 'SO WHO’S COUNTING';

  n1: number;
  n2: number;
  t: number;
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
    this.initStrategy();
    let filaAfectar = 0;
    let numeroElegir = 0;
    let probabilidad = 0;
    ESTRATEGIA_COPIA = ESTRATEGIA;
    let delta = 0;
    
    for (let i = 0; i < this.n1; i++) {

      filaAfectar = Math.floor((Math.random() * (8)) + 1);
      for (let j = 0; j < this.n2; j++) {

        numeroElegir =  Math.floor((Math.random() * (5)) + 1);
        ESTRATEGIA_COPIA[filaAfectar].giro1 = numeroElegir;
        for (let index = 1; index < 4; index++) {

          probabilidad = Math.random();
          switch (index) {
            case 1:
              if (probabilidad > 0.5) {
                ESTRATEGIA_COPIA[filaAfectar].giro2 = ESTRATEGIA_COPIA[filaAfectar].giro1;
              } else {
                if (ESTRATEGIA_COPIA[filaAfectar].giro1 !== 1) {
                  ESTRATEGIA_COPIA[filaAfectar].giro2 = ESTRATEGIA_COPIA[filaAfectar].giro1 - 1;
                }else{
                  ESTRATEGIA_COPIA[filaAfectar].giro2 = 1;
                }
              }
              break;
            case 2:
              if (probabilidad > 0.5) {
                ESTRATEGIA_COPIA[filaAfectar].giro3 = ESTRATEGIA_COPIA[filaAfectar].giro2;
              } else {
                if(ESTRATEGIA_COPIA[filaAfectar].giro2 !== 1){
                  ESTRATEGIA_COPIA[filaAfectar].giro3 = ESTRATEGIA_COPIA[filaAfectar].giro2 - 1;
                }else{
                  ESTRATEGIA_COPIA[filaAfectar].giro3 = 1;
                }
              }
              break;
            case 3:
              if (probabilidad > 0.5) {
                ESTRATEGIA_COPIA[filaAfectar].giro4 = ESTRATEGIA_COPIA[filaAfectar].giro3;
              } else {
                if (ESTRATEGIA_COPIA[filaAfectar].giro3 !== 1)
                {
                  ESTRATEGIA_COPIA[filaAfectar].giro4 = ESTRATEGIA_COPIA[filaAfectar].giro3 - 1;
                }else{
                  ESTRATEGIA_COPIA[filaAfectar].giro4 = 1;
                }
              }
              break;
            default:
              break;
          }
        }
        delta = this.calculateGanance(ESTRATEGIA_COPIA) - this.calculateGanance(ESTRATEGIA);
        if (delta > 0) {
          ESTRATEGIA = ESTRATEGIA_COPIA;
        }else{
          probabilidad = Math.random();
          if (probabilidad < Math.exp(delta / this.t)) {
            ESTRATEGIA = ESTRATEGIA_COPIA;
          }
        }

        this.t = this.t - 1;

      }
    }
    this.estrategia = ESTRATEGIA_COPIA;

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
    ESTRATEGIA_COPIA = ESTRATEGIA;
    this.estrategia = ESTRATEGIA_COPIA;
  }
  calculateGanance(ESTRATEGIAS) {
    return 2;
  }
}
