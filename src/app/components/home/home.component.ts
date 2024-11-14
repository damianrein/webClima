import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  city: string = '';
  weatherData: any = null;
  errorMessage: string = '';

  constructor(private weatherService: WeatherService) {}

  getWeather(): void {
    if (this.city) {
      this.weatherService.getWeather(this.city).subscribe({
        next: (data) => {
          this.weatherData = data;
          this.errorMessage = '';
        },
        error: (err) => {
          this.weatherData = null;
          this.errorMessage = 'No se pudo obtener el pronóstico. Intenta de nuevo.';
        }
      });
    } else {
      this.errorMessage = 'Por favor ingresa el nombre de una ciudad.';
    }
  }

  ngOnInit(): void {
  }

}
