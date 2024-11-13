import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Drink } from '../models/drink.model';
import {API_URL} from "../app/app.constants";

const INIT_DATA = {
  id: "",
  name: "",
  isAlcoholic: "",
  imageUrl: "",
  ingredients: "",
  instructions: "",
}

@Injectable({
  providedIn: 'root'
})
export class DrinkService {

  private drinkResults = signal<Drink[]>(INIT_DATA)

  constructor(private readonly http: HttpClient) { }

  getDrinks(): Observable<Drink[]>{
    return ht
  }
}
