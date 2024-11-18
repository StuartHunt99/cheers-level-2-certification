import { HttpClient } from '@angular/common/http';
import { Injectable, Signal, signal } from '@angular/core';
import { Drink, DrinkId } from '../shared/models/drink.model';
import {API_URL} from "../app.constants";

const INIT_DATA = {
id: "",
name: "",
isAlcoholic:  true,
imageUrl: "",
ingredients: [""],
instructions: "",
}

@Injectable({
  providedIn: 'root'
})
export class DrinkService {

  private readonly drinksResult = signal<Drink[]>([INIT_DATA])
  private readonly drinkDetailsResult = signal<Drink>(INIT_DATA)


  constructor(private readonly http: HttpClient) { }

  getDrinks(): Signal<Drink[]>{    
    this.http.get<Drink[]>(API_URL).subscribe(data => {
      this.drinksResult.set(data);
    });
    return this.drinksResult.asReadonly();
  }

  getDrinkDetails(drinkId: DrinkId): Signal<Drink> {
    this.http.get<Drink>(`${API_URL}/${drinkId}`).subscribe(data => {
      this.drinkDetailsResult.set(data);
    });
    return this.drinkDetailsResult.asReadonly();
  }

}
