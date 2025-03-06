import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { City } from '../../data/interfaces/city';
import { CityService } from '../../data/services/city.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-city-card',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './city-card.component.html',
  styleUrl: './city-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CityCardComponent {
  @Input() city!: City
  @Input() viewMode!: 'grid' | 'list'

  constructor(private cityService: CityService,) { }

  toggleFavorite(id: number): void {
    this.cityService.toggleFavorite(id);
    this.city = {...this.city, favorite: !this.city.favorite};
  }
}

