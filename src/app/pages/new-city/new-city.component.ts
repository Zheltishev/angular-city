import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CityService } from '../../data/services/city.service';
import { City } from '../../data/interfaces/city';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-city',
  imports: [FormsModule],
  templateUrl: './new-city.component.html',
  styleUrl: './new-city.component.scss'
})
export class NewCityComponent {
  cityName: string = '';
  cityDescription: string = '';
  cityImageUrl: string = '';

  constructor(
    private router: Router, 
    private cityService: CityService
  ) { }

  createCity(): void {
    const newCity: City = {
      id: this.cityService.getCities().length + 1,
      name: this.cityName,
      description: this.cityDescription,
      imageUrl: this.cityImageUrl,
      favorite: false
    }

    this.cityService.addNewCity(newCity);

    this.cityName = '';
    this.cityDescription = '';
    this.cityImageUrl = '';

    this.goToPageMain()
  }
  
  goToPageMain() {
    this.router.navigate(['/']);
  }
}

