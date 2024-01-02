import { Injectable } from '@angular/core';
import { Character } from '../interfaces/characters.interface';
import {v4 as uuid} from 'uuid';

@Injectable({
  providedIn: 'root'
})

export class DbzService {

  public characters: Character[]= [{
    id: uuid(),
    name:'Krilling',
    power:1000
  },{
    id: uuid(),
    name:'Goku',
    power:9500
  },{
    id: uuid(),
    name:'Vegeta',
    power:7500
  }
  ];

  addCharacter(character: Character ):void {
    const newCharacter: Character={
      id: uuid(),
      ...character
    };
    console.log(uuid());
    this.characters.push(newCharacter);
  }

  /*onDeleteCharacter(index: number): void{
    this.characters.splice(index,1);
  }*/

  onDeleteCharacterById(id:string): void{
    this.characters = this.characters.filter(character => character.id !== id);
  }


}
