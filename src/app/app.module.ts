import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddStudentsComponent } from './add-students/add-students.component';
import { DisplayStudentsComponent } from './display-students/display-students.component';

@NgModule({
  declarations: [
    AppComponent,
    AddStudentsComponent,
    DisplayStudentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
