import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import {AngularFoodsComponent} from './shared/angular-foods/angular-foods.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AngularFoodsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
