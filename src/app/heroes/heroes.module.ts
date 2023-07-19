import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { HeroesListComponent } from './components/heroes-list/heroes-list.component';
import { HeroComponent } from './components/hero/hero.component';


@NgModule({
  declarations: [
    HeroComponent,
    HeroesListComponent,
  ],
  exports: [
    HeroComponent,
    HeroesListComponent,
  ],
  imports:[
    CommonModule
  ]
})
export class HeroesModule { }
