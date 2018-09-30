import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CarComponent } from './car/car.component';
import { AppRoutingModule } from './app.routing.module';
import {CarService} from './car/car.service';
import {HttpClientModule} from "@angular/common/http";
import {AddCarComponent} from './car/add-car.component';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    AddCarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }