import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InvoicingModule } from './invoicing/invoicing.module';
import { HeroModule } from './hero/hero.module';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { CustomersModule } from './customers/customers.module';
import { StorageService } from './services/storage.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InvoicingModule,
    CustomersModule,
    HeroModule,
  ],
  providers: [
    StorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
