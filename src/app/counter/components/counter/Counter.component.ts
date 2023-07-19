import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <hr><p>Counter is: {{counter}}</p><hr>
  <button (click)="increaseBy(+1)">+1</button>
  <button (click)="increaseBy(-1)">-1</button>
  <button (click)="resetBy()">Reset</button>`

})

export class CounterComponent implements OnInit {
  constructor() { }
  public counter:number=10

  increaseBy(value:number):void{
    this.counter += value;
  }

  resetBy():void{
    this.counter =10
  }

  ngOnInit() { }
}
