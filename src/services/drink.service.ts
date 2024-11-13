import { HttpClient } from '@angular/common/http';
import { Injectable, Signal, signal } from '@angular/core';
import { Drink } from '../models/drink.model';
import {API_URL} from "../app/app.constants";

const INIT_DATA = [{
id: "",
name: "",
isAlcoholic:  true,
imageUrl: "",
ingredients: [""],
instructions: "",
}]

@Injectable({
  providedIn: 'root'
})
export class DrinkService {

  private drinkResult = signal<Drink[]>(INIT_DATA)

  constructor(private readonly http: HttpClient) { }

  getDrinks(): Signal<Drink[]>{    
    this.http.get<Drink[]>(API_URL).subscribe(data => {
      this.drinkResult.set(data);
    });
    return this.drinkResult.asReadonly();
  }
}
