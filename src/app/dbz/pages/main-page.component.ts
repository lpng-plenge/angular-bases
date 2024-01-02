import { Component } from '@angular/core';
import { Character } from '../interfaces/characters.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent  {

  //Dependency Injection
  constructor(private dbzService: DbzService){
    dbzService.characters
  }

  get characters(): Character[]{
    return [...this.dbzService.characters];
  }

  onDeleteCharacterById(id:string): void{
    this.dbzService.onDeleteCharacterById(id);
  }

  onNewCharacter(character: Character): void{
    this.dbzService.addCharacter(character);
  }

}
