import {Routes} from '@angular/router';

export const ALL_ROUTES: Routes = [
  {
    path: 'login',
    loadChildren: '././auth/auth.module#AuthModule'
  }
];
