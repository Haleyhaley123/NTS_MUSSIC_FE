import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MatDialogModule} from '@angular/material/dialog';
import { MusicmanagementComponent } from './components/musicmanagement/musicmanagement.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: "", component: MusicmanagementComponent },
  { path: "musicmanagement", component: MusicmanagementComponent },  
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), MatDialogModule],
  exports: [RouterModule, MatDialogModule]
})
export class AppRoutingModule { }
