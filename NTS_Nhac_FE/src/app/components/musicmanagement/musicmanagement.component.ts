import { Component, OnInit } from '@angular/core';
import { MusicService } from 'src/app/services/music.service';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
@Component({
  selector: 'app-musicmanagement',
  templateUrl: './musicmanagement.component.html',
  styleUrls: ['./musicmanagement.component.css']
})
export class MusicmanagementComponent{ 
  constructor(private serverHttp: MusicService,public dialog: MatDialog ) { }
  public searchcontentmusic = new FormGroup({
    content: new FormControl('')
  })
  public ispopupAdd = false;
  public total : any;
  public ListMusic = null;
  ngOnInit(): void {
    this.getlist();
    
  } 
  //popup thêm mới
  openDialog(){
    this.dialog.open(ModalComponent ,{
      width: '350px'});
  }
  //tạo mới
  createmusic(data: any){
    this.serverHttp.CreateMusic(data).subscribe((result)=> {

    })
  }
  //lấy danh sách
  getlist(){
    this.serverHttp.GetList(this.searchcontentmusic.value).subscribe((result)=> {
      this.ListMusic = result.data;
      this.total = result.data.length;
    })
  }
  //xóa
  deleteMusic(id: any){
    this.serverHttp.DeleteMusic(id).subscribe((response) =>{
      this.getlist();
    });
  }
  //sửa 
  updateMusic(data:any){
  
    this.serverHttp.UpdateMusic(data).subscribe((result)=>{
     
    });
  }

}
