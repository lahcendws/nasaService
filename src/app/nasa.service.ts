import { Injectable } from '@angular/core';
import {map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class NasaService {
  private imageDay:string = "https://api.nasa.gov/planetary/apod?api_key=bglXj8TukvOUeHa1mcZPMhv5dtUHW5kESaWqWdxW";

  constructor(private httpClient: HttpClient) { }

  public getImageOfTheDay(): Observable<string>{
    const observable: Observable<any> = this.httpClient.get(this.imageDay);
    const treatment = (param_data: any) => {
      return param_data.url as string;
    };
    return observable.pipe(map(treatment));
  }
}
