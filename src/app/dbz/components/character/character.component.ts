import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/characters.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css'],
})
export class CharacterComponent {

  //Es un objeto que emite de manera asyncrona un valor generico
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character={
    name: '',
    power: 0
  }

  submitCharacter():void{
    if(this.character.name.length ===0)return;
    this.onNewCharacter.emit(this.character);
    this.character = {name:'',power: 0};
  }
}
