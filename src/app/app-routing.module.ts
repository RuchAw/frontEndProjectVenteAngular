import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ListRolesComponent } from './components/list-roles/list-roles.component';
import { AddRolesComponent } from './components/add-roles/add-roles.component';
import { DetailsRolesComponent } from './components/details-roles/details-roles.component';
// import { ModifierRolesComponent } from './components/modifier-roles/modifier-roles.component';
import { AuthGuardService } from './services/auth-guard.service';
const routes: Routes = [
  //les routes publiques
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  //une route privé controllé par  AuthGuardService
  {path: 'profile', canActivate: [AuthGuardService], component: ProfileComponent},
  {path: 'roles/add', canActivate: [AuthGuardService], component: AddRolesComponent},
  {path: 'roles', canActivate: [AuthGuardService],  component: ListRolesComponent},
  {path: 'roles/details/:id', canActivate: [AuthGuardService],  component: DetailsRolesComponent},
  // {path: 'roles/modifier/:id', canActivate: [AuthGuardService],  component: ModifierRolesComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }