import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule}  from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from "ngx-spinner";  
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import {NgxPaginationModule} from 'ngx-pagination'; 
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { NetworkComponent } from './network/network.component';
import { TvshowComponent } from './tvshow/tvshow.component';
import { PeopleComponent } from './people/people.component';
import { DetailsComponent } from './details/details.component';
import { ActordetailsComponent } from './actordetails/actordetails.component';
import { SearchPipe } from './search.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    MoviesComponent,
    LoginComponent,
    SignupComponent,
    NotfoundComponent,
    NetworkComponent,
    TvshowComponent,
    PeopleComponent,
    DetailsComponent,
    ActordetailsComponent,
    SearchPipe,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    CommonModule,
    
    FormsModule,

    BrowserAnimationsModule,

    ToastrModule.forRoot({
      positionClass :'toast-top-right'
    }),
    NgxPaginationModule
  ],
   schemas: [CUSTOM_ELEMENTS_SCHEMA],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
