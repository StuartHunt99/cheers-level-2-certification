import { effect, inject, Injectable, signal } from '@angular/core';
import { LocalStorageService } from '../app/local-storage.service';
import { DrinkId, DrinkIds } from '../models/drink.model';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  private readonly FAVORITES_KEY: string = "favorites";
  private readonly localStorage: LocalStorageService<DrinkIds> = inject(LocalStorageService<DrinkIds>);
  
  private readonly favoritesSignal = signal<DrinkIds>(
  this.localStorage.get(this.FAVORITES_KEY) ?? []
  );
  
  favorites = this.favoritesSignal.asReadonly();

  constructor() { 
    effect(() => this.localStorage.set(this.FAVORITES_KEY, this.favoritesSignal()));
  }

  //SIMPLER APPROACH BUT SLOWER SINCE FILTER ITERATES OVER THE ORIGINAL ARRAY AND CREATES A REPLACEMENT
  
  toggleFavorite(drinkId: DrinkId): void {
    this.favoritesSignal.update(favorites =>
    favorites.includes(drinkId) 
      ? favorites.filter(favoriteId => favoriteId !== drinkId)
      : [...favorites, drinkId]
    );
    console.log(this.favoritesSignal())
  }

//  ANOTHER OPTION FOR THIS METHOD.  BETTER PERFORMANCE AT THE EXPENSE OF READABILITY;
//  
// toggleFavorite(drinkId: DrinkId): void {
//   const index = this.favoritesSignal().indexOf(drinkId)
//   if (index !== -1)
//     this.favoritesSignal.update(favorites => { 
//     favorites.splice(index, 1);
//     return [...favorites];
//   });
//   else
//     this.favoritesSignal.update(favorites => [...favorites, drinkId]);
//   }
}
