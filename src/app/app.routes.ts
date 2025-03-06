import { Routes } from '@angular/router';
import { NewCityComponent } from './pages/new-city/new-city.component';
import { AllCityComponent } from './pages/all-city/all-city.component';

export const routes: Routes = [
  {path: '', component: AllCityComponent},
  {path: 'new', component: NewCityComponent}
];
