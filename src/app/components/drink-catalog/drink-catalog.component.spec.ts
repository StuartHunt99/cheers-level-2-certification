import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'; 
import { DrinkCatalogComponent } from './drink-catalog.component';
import { provideRouter, withEnabledBlockingInitialNavigation } from '@angular/router';

describe('DrinkCatalogComponent', () => {
  let component: DrinkCatalogComponent;
  let fixture: ComponentFixture<DrinkCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        DrinkCatalogComponent, 
        HttpClientTestingModule, 
      ],
      providers: [
        provideRouter([], withEnabledBlockingInitialNavigation()) 
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(DrinkCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
