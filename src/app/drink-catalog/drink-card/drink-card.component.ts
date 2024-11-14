import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { Drink } from '../../../models/drink.model';

@Component({
  selector: 'app-drink-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './drink-card.component.html',
  styleUrl: './drink-card.component.scss'
})
export class DrinkCardComponent {
@Input() drink: Drink;
}
