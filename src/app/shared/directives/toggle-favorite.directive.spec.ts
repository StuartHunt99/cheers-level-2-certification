import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToggleFavoriteDirective } from './toggle-favorite.directive';
import { FavoritesService } from '../../services/favorites.service';
import { By } from '@angular/platform-browser';

@Component({
  template: `
    <button [appToggleFavorite]="'mock-id'" class="test-button"></button>
  `
})
class TestHostComponent {}

describe('ToggleFavoriteDirective', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let favoritesService: jasmine.SpyObj<FavoritesService>;

  beforeEach(async () => {
    favoritesService = jasmine.createSpyObj('FavoritesService', ['toggleFavorite', 'favorites']);
    favoritesService.favorites.and.returnValue(['mock-id']); 

    await TestBed.configureTestingModule({
      imports: [ToggleFavoriteDirective], 
      declarations: [TestHostComponent],
      providers: [{ provide: FavoritesService, useValue: favoritesService }] 
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    const directiveEl = fixture.debugElement.query(By.directive(ToggleFavoriteDirective));
    expect(directiveEl).toBeTruthy();
  });

  it('should toggle favorite when clicked', () => {
    const buttonEl = fixture.debugElement.query(By.css('.test-button'));

    buttonEl.triggerEventHandler('click', null); // Simulate a click
    expect(favoritesService.toggleFavorite).toHaveBeenCalledWith('mock-id');
  });

  it('should apply active class if the item is a favorite', () => {
    const buttonEl = fixture.debugElement.query(By.css('.test-button'));

    const hasActiveClass = buttonEl.nativeElement.classList.contains('active');
    expect(hasActiveClass).toBeTrue(); 
  });
});
