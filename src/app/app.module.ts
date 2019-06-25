import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PiechartComponent } from './piechart/piechart.component';
import { ChartsModule } from 'ng2-charts';
import { MyAccountComponent } from './my-account/my-account.component';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    PiechartComponent,
    MyAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ChartsModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
