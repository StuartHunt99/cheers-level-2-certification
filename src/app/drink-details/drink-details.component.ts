import { Component, Input, Signal } from '@angular/core';
import { Drink } from '../../models/drink.model';
import { CommonModule } from '@angular/common';
import { PipelineSeparatorPipe } from '../pipe/pipeline-separator.pipe';
import { ToggleFavoriteDirective } from '../toggle-favorite.directive';

@Component({
  selector: 'app-drink-details',
  standalone: true,
  imports: [CommonModule, PipelineSeparatorPipe, ToggleFavoriteDirective],
  templateUrl: './drink-details.component.html',
  styleUrl: './drink-details.component.scss'
})
export class DrinkDetailsComponent {

  @Input() drink!: Signal<Drink>;

}

