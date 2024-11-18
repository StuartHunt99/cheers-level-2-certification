import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { Drink } from '../../../shared/models/drink.model';
import { ToggleFavoriteDirective } from '../../../shared/directives/toggle-favorite.directive';
import { RouterLink } from '@angular/router';
import { PipelineSeparatorPipe } from '../../../shared/pipes/pipeline-separator.pipe';

@Component({
  selector: 'app-drink-card',
  standalone: true,
  imports: [CommonModule, ToggleFavoriteDirective, RouterLink, PipelineSeparatorPipe],
  templateUrl: './drink-card.component.html',
  styleUrl: './drink-card.component.scss'
})
export class DrinkCardComponent {
@Input() drink!: Drink;
}
