import { Injectable } from '@angular/core';
import { City } from '../interfaces/city';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  private cities: City[] = [
    {
      id: 1,
      name: 'Москва',
      description: 'Столица России, город федерального значения',
      imageUrl: 'https://screenshots.enkod.tech/ilya_novikovG6KIVEp3v160xCMY.png',
      favorite: false
    },
    {
      id: 2,
      name: 'Санкт-Петербург',
      description: 'Второй по численности населения город России',
      imageUrl: 'https://screenshots.enkod.tech/ilya_novikovW7s6gLwAGDjaJbNL.png',
      favorite: false
    },
    {
      id: 3,
      name: 'Новосибирск',
      description: 'Третий по численности населения город России',
      imageUrl: 'https://screenshots.enkod.tech/ilya_novikovHyQpb3vrjFvTfzJJ.png',
      favorite: false
    },
    {
      id: 4,
      name: 'Екатеринбург',
      description: 'Город-миллионник в России. Тоже красивый город',
      imageUrl: 'https://screenshots.enkod.tech/ilya_novikovvUvY8ocQ8yIQg6Gi.png',
      favorite: false
    },
    {
      id: 5,
      name: 'Нижний Новгород',
      description: 'Город в центральной России. Красивый город.',
      imageUrl: 'https://screenshots.enkod.tech/ilya_novikovHWEuBOtzexaZ3VQs.png',
      favorite: false
    },
    {
      id: 6,
      name: 'Челябинск',
      description: 'Город в Российской Федерации, седьмой по количеству жителей',
      imageUrl: 'https://screenshots.enkod.tech/ilya_novikovvjgSDr7xZl6A2UmH.png',
      favorite: false
    },
    {
      id: 7,
      name: 'Самара',
      description: 'Город в России, административный центр Самарской области',
      imageUrl: 'https://screenshots.enkod.tech/ilya_novikovc2dbr7KvIJ2dknlZ.png',
      favorite: false
    }
  ]

  constructor() { }

  getCities() {
    return this.cities;
  }

  toggleFavorite(id: number): void {
    this.cities = this.cities.map(city => {
      return id === city.id ? {...city, favorite: !city.favorite} : city;
    })
  }

  addNewCity(city: City): void {
    this.cities.push(city);
  }
}
