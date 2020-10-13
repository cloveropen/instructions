import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
//import { LoginModule } from './login/login.module';
//import { UtilsModule } from './utils/utils.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { InstrcutionsHeaderComponent } from './instrcutions-header/instrcutions-header.component';
import { InstrcutionsFooterComponent } from './instrcutions-footer/instrcutions-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    InstrcutionsHeaderComponent,
    InstrcutionsFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    //LoginModule,
    //UtilsModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
