import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {Ng2PaginationModule} from 'ng2-pagination';
import { LocalStorageModule } from 'angular-2-local-storage';

import { appRouting } from './app.routing';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductAboutComponent } from './product-about/product-about.component';
import { ProductService } from './shared/services/product.service'

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    NotFoundComponent,
    ProductAboutComponent
      ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    appRouting,
    Ng2PaginationModule,
    LocalStorageModule.withConfig({
           prefix: 'my-app',
           storageType: 'localStorage'
       })
  ],
  providers: [ProductService],

  bootstrap: [AppComponent]
})
export class AppModule { }
