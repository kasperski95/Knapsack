import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ResultComponent } from './components/knapsack/result/result.component';
import { InputDataComponent } from './components/knapsack/inputData/inputData.component';
import { DescComponent } from './components/desc/desc.component';



@NgModule({
  declarations: [
    AppComponent,
    ResultComponent,
    InputDataComponent,
    DescComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
