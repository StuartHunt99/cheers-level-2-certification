import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { Drink } from '../../../models/drink.model';
import { PipelineSeparatorPipe } from '../../pipe/pipeline-separator.pipe';
import { ToggleFavoriteDirective } from '../../toggle-favorite.directive';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-drink-card',
  standalone: true,
  imports: [CommonModule, PipelineSeparatorPipe, ToggleFavoriteDirective, RouterLink],
  templateUrl: './drink-card.component.html',
  styleUrl: './drink-card.component.scss'
})
export class DrinkCardComponent {
@Input() drink: Drink;
}
