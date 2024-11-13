import { Component, inject, Signal } from '@angular/core';
import { DrinkService } from '../../../services/drink.service';
import { Drink } from '../../../models/drink.model';

@Component({
  selector: 'app-drink-card',
  standalone: true,
  imports: [],
  templateUrl: './drink-card.component.html',
  styleUrl: './drink-card.component.scss'
})
export class DrinkCardComponent {

protected drinkService = inject (DrinkService);
protected data!: Signal<Drink[]>;

constructor() {
  this.getData();
}

getData(){
  this.data = this.drinkService.getDrinks();
}

}
