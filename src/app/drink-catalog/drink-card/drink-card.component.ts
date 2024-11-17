import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { Drink } from '../../../models/drink.model';
import { PipelineSeparatorPipe } from '../../pipe/pipeline-separator.pipe';
import { ToggleFavoriteDirective } from '../../toggle-favorite.directive';

@Component({
  selector: 'app-drink-card',
  standalone: true,
  imports: [CommonModule, PipelineSeparatorPipe, ToggleFavoriteDirective],
  templateUrl: './drink-card.component.html',
  styleUrl: './drink-card.component.scss'
})
export class DrinkCardComponent {
@Input() drink: Drink;
}
