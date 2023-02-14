import { Component } from '@angular/core';

@Component({
  selector: 'app-calculatrice',
  templateUrl: './calculatrice.component.html',
  styleUrls: ['./calculatrice.component.css']
})
export class CalculatriceComponent {
  randomNumber1 = 0;
  randomNumber2 = 0;
  operator = '';
  result = 0;

  generateRandomNumber() {
    return Math.floor(Math.random() * 100);
  }

  generateRandomNumbers() {
    this.randomNumber1 = this.generateRandomNumber();
    this.randomNumber2 = this.generateRandomNumber();
  }

  add() {
    this.result = this.randomNumber1 + this.randomNumber2;
    this.operator = '+';
  }

  subtract() {
    this.result = this.randomNumber1 - this.randomNumber2;
    this.operator = '-';
  }

  multiply() {
    this.result = this.randomNumber1 * this.randomNumber2;
    this.operator = '*';
  }

  divide() {
    this.result = this.randomNumber1 / this.randomNumber2;
    this.operator = '/';
  }

}
