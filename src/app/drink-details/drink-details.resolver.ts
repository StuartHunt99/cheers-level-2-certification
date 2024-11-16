import {inject, Signal} from '@angular/core';
import {ActivatedRouteSnapshot} from '@angular/router';
import { Drink, DrinkId } from '../../models/drink.model';
import { DrinkService } from '../../services/drink.service';


export function drinkDetailsResolver(route: ActivatedRouteSnapshot): Signal<Drink> {
  const id = route.paramMap.get("id") as DrinkId;
  return inject(DrinkService).getDrinkDetails(id);
}
