import { Input, Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/characters.interface';
import { identifierName } from '@angular/compiler';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})

export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    id: '',
    name: 'Trunks',
    power: 10
  }];

  @Output()
  public onDeleteId: EventEmitter<string> = new EventEmitter();

  public onDeleteCharacter(id?: string): void{
    if(!id) return;
    this.onDeleteId.emit(id);
  }
 }
