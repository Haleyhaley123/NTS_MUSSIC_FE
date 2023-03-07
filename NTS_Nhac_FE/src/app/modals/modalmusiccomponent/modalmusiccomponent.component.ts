import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormArray } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import {MusicBinding, MusicPayload, ShowData} from 'src/app/models/musicmodel';
import { MusicService } from 'src/app/services/music.service';

@Component({
  selector: 'app-modalmusiccomponent',
  templateUrl: './modalmusiccomponent.component.html',
  styleUrls: ['./modalmusiccomponent.component.css']
})
export class ModalmusiccomponentComponent implements OnInit {    
  
  public databinding = new MusicBinding();
  public showdata = new ShowData();
  public datapayload = new MusicPayload();
  constructor(public dialog: MatDialog, private serverHttp: MusicService) { }

  ngOnInit(): void {
  }
  
  //tạo mới
  createmusic() {   
    this.datapayload.typeMusicCode = this.databinding.typechoice.trim();
    if (this.databinding.typechoice.trim() == 'MUSICDAY') {
      this.datapayload.timePlay = this.databinding.HourTimePlay + ':' + this.databinding.MinuteTimePlay;
      this.datapayload.datePlay = this.databinding.DatePlay;
    }
    if (this.databinding.typechoice.trim() == 'MUSICMONTH') {
      this.datapayload.timePlay = this.databinding.HourTimePlay + ':' + this.databinding.MinuteTimePlay;
      this.datapayload.datePlay =  this.databinding.DayofWeek;       
    }
    if (this.databinding.typechoice.trim() == 'MUSICYEAR') {
      this.datapayload.timePlay = this.databinding.DayofmonthChoice;
      this.datapayload.datePlay =this.databinding.MonthChoice;      
    }   
    this.serverHttp.CreateMusic(this.datapayload).subscribe((result) => {
      if(result.data != null){
        alert('Thêm mới thành công');
      }else{
        alert('Thêm mới thất bại');
      }
    })

  }
  //sửa 
  updateMusic(data: any) {

    this.serverHttp.UpdateMusic(data).subscribe((result) => {

    });
  }
  //upload file
  uploadfile(event: any) {
    this.databinding.fileToUpload = event.target.files[0];
    let formData = new FormData();
    formData.append('files', this.databinding.fileToUpload);
    this.serverHttp.UploadFile(formData).subscribe((result) => {
      this.datapayload.uploadFileId = result.id;
    });
    
    
  }
  closemodal() {
    this.dialog.closeAll();
  }
  onChangtypemisic(event: any) {
    this.databinding.typechoice = event.target.value;
    if (this.databinding.typechoice.trim() == 'MUSICDAY') {
      this.databinding.nametypechoice = 'Nhạc một lần';
      this.databinding.ShowContent = 1;
    }
    if (this.databinding.typechoice.trim() == 'MUSICMONTH') {
      this.databinding.nametypechoice = 'Nhạc theo tuần';
      this.databinding.ShowContent = 2;
    }
    if (this.databinding.typechoice.trim() == 'MUSICYEAR') {
      this.databinding.nametypechoice = 'Nhạc theo năm';
      this.databinding.ShowContent = 3;
    }

  }
  onChangeStatus(event: any) {
    this.datapayload.status = Boolean(event.target.value);
  }
  onChangedayofweek(event: any) {  
    console.log('đây là kiểm tra', event.target.value.checked);
    this.databinding.DayofWeek =   this.databinding.DayofWeek.concat(',' + event.target.value);
  }
  onChangmonthplay(event: any) {
    this.databinding.MonthChoice = this.databinding.MonthChoice.concat(',' + event.target.value);
  }
  onChangeofmonth(event: any){
    this.databinding.DayofmonthChoice = this.databinding.DayofmonthChoice.concat(',' + event.target.value);
  }
  cleardata() {

  }
}
function moment(yourDate: any) {
  throw new Error('Function not implemented.');
}

