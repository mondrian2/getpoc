import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExerciciosService {

  constructor(private http: HttpClient) { }

  public get() {
    return this.http.get('https://montebiancocursoonline.herokuapp.com/api/itens');
  }
}
