import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from "../app/app.component";
import { RestComponent } from "../app/rest/rest.component";
import { HeroesComponent } from "../app/heroes/heroes.component";

const routes: Routes = [
    {path: '', redirectTo: 'app-root', pathMatch: 'full'},
    {
        path:  'app-rest',
        component:  RestComponent
    },
    {
        path:  'app-heroes',
        component:  HeroesComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }