import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ParcelComponent } from './parcel.component';

@NgModule({
  declarations: [
    AppComponent,
    ParcelComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
