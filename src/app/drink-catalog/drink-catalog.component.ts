import { Component, inject, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';  // Add this
import { DrinkCardComponent } from './drink-card/drink-card.component';
import { Drink } from '../../models/drink.model';
import { DrinkService } from '../../services/drink.service';
import { SearchBoxComponent } from "../search-box/search-box.component";

@Component({
  selector: 'app-drink-catalog',
  standalone: true,
  imports: [DrinkCardComponent, CommonModule, SearchBoxComponent],
  templateUrl: './drink-catalog.component.html',
  styleUrl: './drink-catalog.component.scss',
})
export class DrinkCatalogComponent {

  protected drinkService = inject (DrinkService);
  protected data!: Signal<Drink[]>;
  protected filter: string = "";
  constructor() {
    this.getData();
  }
  
  getData(){
    this.data = this.drinkService.getDrinks();
  }

  onTextChanged(newText: string){
   this.filter = newText;
   console.log('filter:', newText)
  }
  
}
