import { Component, Input, Signal } from '@angular/core';
import { Drink } from '../../models/drink.model';

@Component({
  selector: 'app-drink-details',
  standalone: true,
  imports: [],
  templateUrl: './drink-details.component.html',
  styleUrl: './drink-details.component.scss'
})
export class DrinkDetailsComponent {

  @Input() drink!: Signal<Drink>;

}

