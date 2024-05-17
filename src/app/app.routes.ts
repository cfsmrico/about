import { Routes } from '@angular/router';
import { TdeeComponent } from './tdee/tdee.component';

export const routes: Routes = [
  { path: '', component: TdeeComponent },
  { path: 'tdee', component: TdeeComponent }
];
