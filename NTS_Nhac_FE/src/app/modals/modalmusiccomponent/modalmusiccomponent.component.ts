import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-modalmusiccomponent',
  templateUrl: './modalmusiccomponent.component.html',
  styleUrls: ['./modalmusiccomponent.component.css']
})
export class ModalmusiccomponentComponent implements OnInit {
  public typeMusics = [
    {Name:'Nhạc một lần', value: 'MUSICDAY'},
    {Name:'Nhạc theo tuần', value: 'MUSICMONTH'},
    {Name:'Nhạc theo năm', value: 'MUSICYEAR'},
    ];
  public typechoice = '';
  public nametypechoice = '';
  gfg1 = {hour: 15, minute: 58};

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  closemodal(){
    this.dialog.closeAll();
  }
  radioChangeHandler(event: any){
    this.typechoice = event.target.value;
    if(this.typechoice.trim()=='MUSICDAY'){
      this.nametypechoice = 'Nhạc một lần';
    }
    if(this.typechoice.trim()=='MUSICMONTH'){
      this.nametypechoice = 'Nhạc theo tuần';
    }
    if(this.typechoice.trim()=='MUSICYEAR'){
      this.nametypechoice = 'Nhạc theo năm';
    }
  }
}
