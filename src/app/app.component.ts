import {Component, OnInit} from '@angular/core';
import {NasaService} from "./nasa.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'nasaService';
 public image: string | undefined;
 private service:NasaService;
  constructor(private param_service:NasaService) {
    this.service=param_service;
  }
  ngOnInit(): void {
    this.service.getImageOfTheDay().subscribe((param_data: any) => {
      this.image = param_data;
    }) ;
      }
  }

