import { Component } from '@angular/core';
import {ButtonModule} from 'primeng/button';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'roulette';

  number: number;

  teamOne: number[];

  teamSecond: number[];

  strategy: number[][];

  createStrategy(){
    this.strategy[0][0]=5;
    this.strategy[0][1]=5;
    this.strategy[0][2]=4;
    this.strategy[0][3]=4;
    this.strategy[0][4]=5;
    this.strategy[0][5]=5;
    this.strategy[0][6]=5;
    this.strategy[0][7]=5;
    this.strategy[0][8]=4;
    //Giro 2
    this.strategy[1][0]=5;
    this.strategy[1][1]=5;
    this.strategy[1][2]=4;
    this.strategy[1][3]=4;
    this.strategy[1][4]=5;
    this.strategy[1][5]=5;
    this.strategy[1][6]=5;
    this.strategy[1][7]=5;
    this.strategy[1][8]=4;
     //Giro 3
     this.strategy[2][0]=5;
     this.strategy[2][1]=5;
     this.strategy[2][2]=4;
     this.strategy[2][3]=4;
     this.strategy[2][4]=5;
     this.strategy[2][5]=5;
     this.strategy[2][6]=5;
     this.strategy[2][7]=5;
     this.strategy[2][8]=4;
    //Giro 4
    this.strategy[3][0]=5;
    this.strategy[3][1]=5;
    this.strategy[3][2]=4;
    this.strategy[3][3]=4;
    this.strategy[3][4]=5;
    this.strategy[3][5]=5;
    this.strategy[3][6]=5;
    this.strategy[3][7]=5;
    this.strategy[3][8]=4;
    this.strategy[3][8]=4;

    //Giro 5
    this.strategy[4][0]=5;
    this.strategy[4][1]=5;
    this.strategy[4][2]=4;
    this.strategy[4][3]=4;
    this.strategy[4][4]=5;
    this.strategy[4][5]=5;
    this.strategy[4][6]=5;
    this.strategy[4][7]=5;
    this.strategy[4][8]=4;

  }

  turnRoulette(){
    this.number = Math.round(Math.random() * (9 - 0));
  }
}
