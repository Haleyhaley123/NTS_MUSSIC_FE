import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MusicService } from 'src/app/services/music.service';

@Component({
  selector: 'app-modalmusiccomponent',
  templateUrl: './modalmusiccomponent.component.html',
  styleUrls: ['./modalmusiccomponent.component.css']
})
export class ModalmusiccomponentComponent implements OnInit {
  nusicinfoForm = new FormGroup({
    timePlay: new FormControl(''),
    datePlay: new FormControl(''),
    musicContent: new FormControl(''),
    status: new FormControl(''),
    typeMusicCode: new FormControl(''),
    uploadFileId: new FormControl('')
  });
  public fileToUpload: any;
  public namefile: any;
  public _uploadFileId = '';
  public ShowContent = 0;
  public typechoice = '';
  public nametypechoice = '';
  public dayofweek = [
    { Name: 'Thứ 2', value: '2' }, { Name: 'Thứ 3', value: '3' },
    { Name: 'Thứ 4', value: '4' }, { Name: 'Thứ 5', value: '5' },
    { Name: 'Thứ 6', value: '6' }, { Name: 'Thứ 7', value: '7' },
    { Name: 'Chủ nhật', value: 'cn' }
  ];
  public monthplay = [
    { Name: 'Tháng 1', value: '1' }, { Name: 'Tháng 2', value: '2' },
    { Name: 'Tháng 3', value: '3' }, { Name: 'Tháng 4', value: '4' },
    { Name: 'Tháng 5', value: '5' }, { Name: 'Tháng 6', value: '6' },
    { Name: 'Tháng 7', value: '7' }, { Name: 'Tháng 8', value: '8' },
    { Name: 'Tháng 9', value: '9' }, { Name: 'Tháng 10', value: '10' },
    { Name: 'Tháng 11', value: '11' }, { Name: 'Tháng 12', value: '12' },
  ];
  public dayofmonth = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  constructor(public dialog: MatDialog, private serverHttp: MusicService) { }

  ngOnInit(): void {
  }
  //upload file
  uploadfile(event: any) {
    this.fileToUpload = event.target.files[0];
    console.log('file', this.fileToUpload);
    let formData = new FormData();
    formData.set("name",this.fileToUpload.name);
      formData.set("file",this.fileToUpload.file);
      this.serverHttp.UploadFile(formData).subscribe((result) => {
        if(result)
        this._uploadFileId = result.id;
        console.log('file',  this._uploadFileId);
      });
  }
  // this.serverHttp.UploadFile(FormData).subscribe((result)=>{
  //   this._uploadFileId = result.Id;
  // });
  //tạo mới
  createmusic(data: any) {
    this.serverHttp.CreateMusic(data).subscribe((result) => {
      
    })
  }
  //sửa 
  updateMusic(data: any) {

    this.serverHttp.UpdateMusic(data).subscribe((result) => {

    });
  }
  closemodal() {
    this.dialog.closeAll();
  }
  radioChangeHandler(event: any) {
    this.typechoice = event.target.value;
    if (this.typechoice.trim() == 'MUSICDAY') {
      this.nametypechoice = 'Nhạc một lần';
      this.ShowContent = 1;
    }
    if (this.typechoice.trim() == 'MUSICMONTH') {
      this.nametypechoice = 'Nhạc theo tuần';
      this.ShowContent = 2;
    }
    if (this.typechoice.trim() == 'MUSICYEAR') {
      this.nametypechoice = 'Nhạc theo năm';
      this.ShowContent = 3;
    }
  }
}
