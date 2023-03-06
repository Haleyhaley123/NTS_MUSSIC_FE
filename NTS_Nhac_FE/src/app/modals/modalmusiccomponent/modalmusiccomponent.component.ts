import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormArray } from '@angular/forms';
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
  constructor(public dialog: MatDialog, private serverHttp: MusicService) { }

  ngOnInit(): void {
  }
  
  //tạo mới
  createmusic() {
    let datapayload = new MusicPayload();
    datapayload.MusicContent = this.databinding.Content;
    datapayload.TypeMusicCode = this.databinding.typechoice.trim();
    datapayload.Status = this.databinding.statuschoice;
    datapayload.UploadFileId =  this.databinding._uploadFileId;
    if (this.databinding.typechoice.trim() == 'MUSICDAY') {
      datapayload.TimePlay = this.databinding.HourTimePlay + ':' + this.databinding.MinuteTimePlay;
      datapayload.DatePlay = this.databinding.DatePlay;
    }
    if (this.databinding.typechoice.trim() == 'MUSICMONTH') {
      datapayload.TimePlay = this.databinding.HourTimePlay + ':' + this.databinding.MinuteTimePlay;
      datapayload.DatePlay =  this.databinding.DayofWeek;     
    }
    if (this.databinding.typechoice.trim() == 'MUSICYEAR') {
      datapayload.TimePlay = this.databinding.DayofmonthChoice;
      datapayload.DatePlay =this.databinding.MonthChoice;      
    }   
    this.serverHttp.CreateMusic(datapayload).subscribe((result) => {

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
    console.log('file', this.databinding.fileToUpload);
    let formData = new FormData();
    formData.append('files', this.databinding.fileToUpload);
    console.log(formData);
    this.serverHttp.UploadFile(formData).subscribe((result) => {
      if (result)
        this.databinding._uploadFileId = result.id;
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
    this.databinding.statuschoice = event.target.value;
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
