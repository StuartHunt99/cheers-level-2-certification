import { Component, Input, Signal } from '@angular/core';
import { Drink } from '../../models/drink.model';
import { CommonModule } from '@angular/common';
import { ToggleFavoriteDirective } from '../toggle-favorite.directive';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-drink-details',
  standalone: true,
  imports: [CommonModule, ToggleFavoriteDirective, RouterModule],
  templateUrl: './drink-details.component.html',
  styleUrl: './drink-details.component.scss'
})
export class DrinkDetailsComponent {

  @Input() drink!: Signal<Drink>;

}

