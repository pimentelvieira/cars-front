import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Car } from '../models/car.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CarService {

  constructor(private http:HttpClient) {}

  private carUrl = 'https://william-fiap-cloud.herokuapp.com/cars';

  public getCars() {
    return this.http.get<Car[]>(this.carUrl);
  }

  public createCar(car) {
    return this.http.post<Car>(this.carUrl, car);
  }
}