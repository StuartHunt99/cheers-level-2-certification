import { Component } from '@angular/core';
import { DrinkCardComponent } from './drink-card/drink-card.component';

@Component({
  selector: 'app-drink-catalog',
  standalone: true,
  imports: [DrinkCardComponent],
  templateUrl: './drink-catalog.component.html',
  styleUrl: './drink-catalog.component.scss'
})
export class DrinkCatalogComponent {

}
