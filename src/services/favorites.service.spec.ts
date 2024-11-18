import { TestBed } from '@angular/core/testing';
import { FavoritesService } from './favorites.service';
import { LocalStorageService } from '../app/local-storage.service';
import { DrinkId } from '../models/drink.model';

describe('FavoritesService', () => {
  let service: FavoritesService;
  let mockLocalStorage: jasmine.SpyObj<LocalStorageService<DrinkId[]>>;

  beforeEach(() => {
    mockLocalStorage = jasmine.createSpyObj('LocalStorageService', ['get', 'set']);
    mockLocalStorage.get.and.returnValue(['mock-id']); 

    TestBed.configureTestingModule({
      providers: [{ provide: LocalStorageService, useValue: mockLocalStorage }]
    });
    service = TestBed.inject(FavoritesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initialize favorites from local storage', () => {
    expect(service.favorites()).toEqual(['mock-id']);
    expect(mockLocalStorage.get).toHaveBeenCalledWith('favorites');
    expect(service.favorites()).toContain('mock-id');
    expect(service.favorites().length).toBe(1);
  });

  it('should add a drink to favorites', (done: DoneFn) => {
    service.toggleFavorite('new-id');
    setTimeout(() => {
      expect(service.favorites()).toContain('new-id');
      expect(service.favorites().length).toBe(2);
      done();
    }, 0);
  });

  it('should remove a drink from favorites', (done: DoneFn) => {
    service.toggleFavorite('mock-id');
    setTimeout(() => {
      expect(service.favorites()).not.toContain('mock-id');
      expect(service.favorites().length).toBe(0);
      done();
    }, 0);
  });

});
