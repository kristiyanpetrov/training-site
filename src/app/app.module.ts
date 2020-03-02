import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HeaderComponent } from './pages/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    MDBBootstrapModule.forRoot()
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
