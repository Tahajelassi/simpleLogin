import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ALL_ROUTES} from './shared/routes/all-routes';
import {LoginComponent} from './auth/login/login.component';

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent, data: {title: 'login'}, children: ALL_ROUTES},
  {path: '', component: LoginComponent, data: {title: 'login'}, children: ALL_ROUTES}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
