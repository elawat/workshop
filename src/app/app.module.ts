import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreHttpModule } from './core/http/core-http.module';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, NgxSpinnerModule, CoreHttpModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
