import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import { AuthModule } from './auth/auth/auth.module';
import { ProfileComponent } from './components/profile/profile.component';
import { AddRolesComponent } from './components/add-roles/add-roles.component';
import { ListRolesComponent } from './components/list-roles/list-roles.component';
import { DetailsRolesComponent } from './components/details-roles/details-roles.component';
// import { ModifierRolesComponent } from './components/modifier-roles/modifier-roles.component';
 
@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    AddRolesComponent,
    ListRolesComponent,
    DetailsRolesComponent,
    // ModifierRolesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    AuthModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }