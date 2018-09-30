import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Car } from '../models/car.model';
import { CarService } from './car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styles: []
})
export class CarComponent implements OnInit {

  cars: Car[];

  constructor(private router: Router, private carService: CarService) {

  }

  ngOnInit() {
    this.carService.getCars()
      .subscribe( data => {
        this.cars = data;
      });
  };
}