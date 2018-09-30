import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CarComponent } from './car/car.component';
import {AddCarComponent} from './car/add-car.component';

const routes: Routes = [
  { path: 'cars', component: CarComponent },
  { path: 'add', component: AddCarComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }