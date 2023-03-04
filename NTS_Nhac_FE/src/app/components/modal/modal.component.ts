import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  
})
export class ModalComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
  }
  closemodal(){
    this.dialog.closeAll();
  }

}
