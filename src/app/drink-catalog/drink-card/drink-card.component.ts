import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { Drink } from '../../../models/drink.model';
import { FormatSeparatorPipe } from '../../pipe/format-separator.pipe';

@Component({
  selector: 'app-drink-card',
  standalone: true,
  imports: [CommonModule, FormatSeparatorPipe],
  templateUrl: './drink-card.component.html',
  styleUrl: './drink-card.component.scss'
})
export class DrinkCardComponent {
@Input() drink: Drink;
}
