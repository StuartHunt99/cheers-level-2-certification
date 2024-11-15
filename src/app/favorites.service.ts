import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  private readonly FAVORITES_KEY = "favorites";
  private storage = inject(StorageService<DrinkIds>);
  private favoritesSignal = signal<DrinkIds>(this.storage.get(this.FAVORITES_KEY));
  favorites = this.favoritesSignal.asReadonly();

  constructor() { }
}
