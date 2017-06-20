import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MyFoodsComponent } from './my-foods/my-foods.component';
import { SearchByNamePipe } from './pipes/search-by-name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MyFoodsComponent,
    SearchByNamePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
