import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { FirstComponent } from './components/first/first.component';
import { NotFoundComponent } from './components/system/not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    FirstComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
