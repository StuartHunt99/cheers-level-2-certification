import { Directive, HostBinding, HostListener, inject, Input } from '@angular/core';
import { FavoritesService } from '../../services/favorites.service';
import { DrinkId } from '../models/drink.model';

@Directive({
  selector: '[appToggleFavorite]',
  standalone: true
})
export class ToggleFavoriteDirective {

  private readonly favoritesService = inject(FavoritesService);

  @Input({required: true, alias: 'appToggleFavorite'})
  favoriteId!: DrinkId;

  @HostListener('click')
  toggleFavorite() {
    this.favoritesService.toggleFavorite(this.favoriteId);
  }

  @HostBinding('class.active')
  get isFavorite() {    
    return this.favoritesService.favorites().includes(this.favoriteId);
  }


}
