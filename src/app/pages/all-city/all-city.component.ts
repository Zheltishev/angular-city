import { Component, inject } from '@angular/core';
import { CityService } from '../../data/services/city.service';
import { City } from '../../data/interfaces/city';
import { CityCardComponent } from '../../components/city-card/city-card.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-city',
  imports: [CityCardComponent],
  standalone: true,
  templateUrl: './all-city.component.html',
  styleUrl: './all-city.component.scss'
})
export class AllCityComponent {
  private cityService = inject(CityService);
  cities: Array<City> = [];
  viewMode: 'grid' | 'list' = 'list'

  setViewMode(mode: 'grid' | 'list') {
    this.viewMode = mode;
  }

  constructor(private router: Router) {
    this.cities = this.cityService.getCities();
  }

  goToPageNew() {
    this.router.navigate(['/new']);
  }
}
