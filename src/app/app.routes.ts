import { RouterModule, Routes } from '@angular/router';
import { DrinkCatalogComponent } from './components/drink-catalog/drink-catalog.component';
import { drinkDetailsResolver } from './components/drink-details/drink-details.resolver';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
    { path: '', component: DrinkCatalogComponent },
    { path: "drink/:id",
        loadComponent: () => import("./components/drink-details/drink-details.component").then(m => m.DrinkDetailsComponent),
        resolve: {drink: drinkDetailsResolver}
      },
      {path: 'not-found', component: NotFoundComponent},
      {path: '**', redirectTo: 'not-found'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {bindToComponentInputs: true})],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }