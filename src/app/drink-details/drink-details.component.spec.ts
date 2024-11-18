import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DrinkDetailsComponent } from './drink-details.component';
import { signal } from '@angular/core';
import { provideRouter, withEnabledBlockingInitialNavigation } from '@angular/router';

describe('DrinkDetailsComponent', () => {
  let component: DrinkDetailsComponent;
  let fixture: ComponentFixture<DrinkDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        DrinkDetailsComponent, 
      ],
      providers: [
        provideRouter([], withEnabledBlockingInitialNavigation()) 
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(DrinkDetailsComponent);
    component = fixture.componentInstance;

    component.drink = signal({
      id: '1',
      name: 'Mock Drink',
      isAlcoholic: true,
      imageUrl: 'mock-image-url.jpg',
      ingredients: ['Ingredient 1', 'Ingredient 2'],
      instructions: 'Mix and serve.',
    });

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display drink details correctly', () => {
    const compiled = fixture.nativeElement as HTMLElement;
  
    expect(compiled.querySelector('.card-name')?.textContent).toContain('Mock Drink');
    expect(compiled.querySelector('.card-image')?.getAttribute('src')).toBe('mock-image-url.jpg');
    expect(compiled.querySelector('.type-group p')?.textContent).toContain('Alcoholic');
    expect(compiled.querySelector('.ingredients-group ul li:first-child')?.textContent).toContain('Ingredient 1');
    expect(compiled.querySelector('.instructions-group p')?.textContent).toContain('Mix and serve.');
  });
  
});
