import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductAboutComponent } from './product-about/product-about.component';



const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'about/:_id', component: ProductAboutComponent },
  { path: '**', component: NotFoundComponent }

];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
