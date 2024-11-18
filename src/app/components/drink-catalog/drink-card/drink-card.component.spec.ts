import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter, withEnabledBlockingInitialNavigation } from '@angular/router';
import { DrinkCardComponent } from './drink-card.component';

describe('DrinkCardComponent', () => {
  let component: DrinkCardComponent;
  let fixture: ComponentFixture<DrinkCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrinkCardComponent],
      providers: [
        provideRouter([], withEnabledBlockingInitialNavigation()) 
      ]
    }).compileComponents();
    
    fixture = TestBed.createComponent(DrinkCardComponent);
    component = fixture.componentInstance;

    component.drink = {
      id: '1',
      name: 'Mocktail Delight',
      isAlcoholic: false,
      imageUrl: 'mock-image-url.jpg',
      ingredients: ['Orange Juice', 'Lemon', 'Mint'],
      instructions: 'Mix all ingredients and serve chilled.'
    };
    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
