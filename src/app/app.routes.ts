import { RouterModule, Routes } from '@angular/router';
import { DrinkCatalogComponent } from './drink-catalog/drink-catalog.component';
import { drinkDetailsResolver } from './drink-details/drink-details.resolver';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: '', component: DrinkCatalogComponent },
    { path: "drink/:id",
        loadComponent: () => import("./drink-details/drink-details.component").then(m => m.DrinkDetailsComponent),
        resolve: {drink: drinkDetailsResolver}
      }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {bindToComponentInputs: true})],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }