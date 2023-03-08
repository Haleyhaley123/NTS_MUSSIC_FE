import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormArray } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MusicBinding, MusicofYear, MusicPayload, ShowData } from 'src/app/models/musicmodel';
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
  public musicofyear = new MusicofYear();
  public datajson: any[] = [];
  constructor(public dialog: MatDialog, private serverHttp: MusicService) { }

  ngOnInit(): void {
  }

  //tạo mới
  createmusic() {
    this.datapayload.typeMusicCode = this.databinding.typeChoice.trim();
    if( this.databinding.hourTimePlay != '' && this.databinding.minuteTimePlay != ''){
      this.datapayload.timePlay = this.databinding.hourTimePlay + ':' + this.databinding.minuteTimePlay;
    }      
    if (this.databinding.typeChoice.trim() == 'MUSICDAY') {     
      this.datapayload.datePlay = this.databinding.datePlay;
    }
    if (this.databinding.typeChoice.trim() == 'MUSICMONTH') {
      
      this.datapayload.datePlay = this.databinding.dayofWeek;
    }
    if (this.databinding.typeChoice.trim() == 'MUSICYEAR') {
      if (this.musicofyear.monthPlay != '') {
        this.datajson.push(this.musicofyear);
      }
      this.datapayload.datePlay = JSON.stringify(this.datajson);
    }
    this.serverHttp.CreateMusic(this.datapayload).subscribe((result) => {
      if (result.data != null) {
        alert('Thêm mới thành công');
      } else {
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
    this.databinding.typeChoice = event.target.value;
    if (this.databinding.typeChoice.trim() == 'MUSICDAY') {
      this.databinding.nameTypeChoice = 'Nhạc một lần';
      this.databinding.showContent = 1;
    }
    if (this.databinding.typeChoice.trim() == 'MUSICMONTH') {
      this.databinding.nameTypeChoice = 'Nhạc theo tuần';
      this.databinding.showContent = 2;
    }
    if (this.databinding.typeChoice.trim() == 'MUSICYEAR') {
      this.databinding.nameTypeChoice = 'Nhạc theo năm';
      this.databinding.showContent = 3;
    }

  }
  onChangeStatus(event: any) {
    this.datapayload.status = Boolean(event.target.value);
  }
  onChangedayofweek(event: any) {
    this.databinding.dayofWeek = this.databinding.dayofWeek.concat(',' + event.target.value);
  }
  onChangmonthplay(event: any) {
    if (this.musicofyear.dayofMonths != '') {
      let data = new MusicofYear();
      data.dayofMonths = this.musicofyear.dayofMonths;
      data.monthPlay = this.musicofyear.monthPlay;
      // var data= Object.assign({},this.musicofyear);
      this.datajson.push(data);
    }
    this.musicofyear.dayofMonths = '';
    this.musicofyear.monthPlay = '';
    this.musicofyear.monthPlay = event.target.value;
  }
  onChangedayofmonth(event: any) {
    this.musicofyear.dayofMonths = this.musicofyear.dayofMonths.concat(',' + event.target.value);
  }
}

