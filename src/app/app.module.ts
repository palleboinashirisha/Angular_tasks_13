import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiComponent } from './api/api.component';
import { AddComponent } from './add/add.component';
// import { InformationService } from './information.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { ModificationComponent } from './modification/modification.component';

@NgModule({
  declarations: [
    AppComponent,
    ApiComponent,
    AddComponent,
    EditComponent,
    DeleteComponent,
    ModificationComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule, 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
