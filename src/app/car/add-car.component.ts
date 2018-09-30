import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Car } from '../models/car.model';
import { CarService } from './car.service';

@Component({
  templateUrl: './add-car.component.html'
})
export class AddCarComponent {

  car: Car = new Car();

  constructor(private router: Router, private carService: CarService) {

  }

  createCar(): void {
    this.carService.createCar(this.car)
        .subscribe( data => {
          alert("Carro criado com sucesso.");
        });

  };

}