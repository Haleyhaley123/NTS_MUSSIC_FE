import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MusicmanagementComponent } from './components/musicmanagement/musicmanagement.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalComponent } from './components/modal/modal.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {MatDialogModule } from '@angular/material/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule} from  '@angular/material/core';
import { TestComponent } from './components/test/test.component';
import { ModalmusiccomponentComponent } from './modals/modalmusiccomponent/modalmusiccomponent.component';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [
    AppComponent,
    MusicmanagementComponent,
    PageNotFoundComponent,
    ModalComponent,
    HeaderComponent,
    FooterComponent,
    TestComponent,
    ModalmusiccomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule, 
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
