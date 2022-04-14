import { RouterModule, Routes } from '@angular/router';
import { GuestGuard } from '../core/guards/guest.guard';
import { LoggedGuard } from '../core/guards/logged.guard';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
      path: 'login',
      canActivate: [GuestGuard],
      component: LoginComponent
  },
  {
      path: 'register',
      canActivate: [GuestGuard],
      component: RegisterComponent
  },
  {
      path: 'profile',
      canActivate: [LoggedGuard],
      component: ProfileComponent
  }
];

export const AuthRoutingModule = RouterModule.forChild(routes);
