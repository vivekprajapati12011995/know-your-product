import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { Ng2PaginationModule } from 'ng2-pagination';
import { ToastModule } from 'ng2-toastr/ng2-toastr';


import { appRouting } from './app.routing';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductAboutComponent } from './product-about/product-about.component';
import { ProductService } from './shared/services/product.service'
import { UserService } from './shared/services/user.service';
import { AuthenticationService } from './shared/services/authentication.service';

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
    MaterialModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    appRouting,
    Ng2PaginationModule,
    ToastModule.forRoot()

  ],
  providers: [
    ProductService,
    UserService,
    AuthenticationService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
