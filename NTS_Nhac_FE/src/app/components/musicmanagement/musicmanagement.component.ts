import { Component, OnInit } from '@angular/core';
import { MusicService } from 'src/app/services/music.service';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ModalmusiccomponentComponent } from 'src/app/modals/modalmusiccomponent/modalmusiccomponent.component';
import { FilterMusic, ShowData } from 'src/app/models/musicmodel';
@Component({
  selector: 'app-musicmanagement',
  templateUrl: './musicmanagement.component.html',
  styleUrls: ['./musicmanagement.component.css']
})
export class MusicmanagementComponent{ 
  constructor(private serverHttp: MusicService,public dialog: MatDialog ) { } 
  public ispopupAdd = false;
  public total : any;
  public ListMusic = null;
  public filter = new FilterMusic();
  public numberpaging = [1];
  ngOnInit(): void {
    this.getlist();    
  } 
  //popup thêm mới
  openDialog(){
    const dialog = this.dialog.open(ModalmusiccomponentComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '65%',
      width: '50%',
     // panelClass: 'full-screen-modal'
    });
    // this.dialog.open(ModalmusiccomponentComponent ,
    //   {
    //   width: '100%',
    //   height: '500px', 
    // });
  }
  
  onChangePagesize(event: any){
    this.filter.pageSize = event.target.value;
    this.numberpaging = [0];
    this.getlist();
  }
  clickChoosePage(choice: any){
    this.filter.pageNumber = choice;
    this.getlist();
  }
  onclickIncreasePage(){
    if(this.numberpaging[this.numberpaging.length -1] < this.filter.pageNumberfilter){
      this.numberpaging.shift();   
      if(this.numberpaging[this.numberpaging.length -1]< this.filter.pageNumberfilter && this.numberpaging.length < 3){
        this.numberpaging.push(this.numberpaging[1]+ 1);
      }
    }
   }
   onclickReducePage(){    
    if(this.numberpaging[this.numberpaging.length -1] > 3){
      this.numberpaging.pop();    
      if(this.numberpaging[this.numberpaging.length -1]<= this.filter.pageNumberfilter && this.numberpaging.length <3){
        this.numberpaging.unshift(this.numberpaging[0]- 1);
      }
    }
   }
   onclickStartpage(){
    if(this.filter.pageNumberfilter> 3){
      this.numberpaging = [1, 2, 3];
    }else{
      this.numberpaging = [1,this.filter.pageNumberfilter]
    }
   }
   onclickEndpage(){
    if(this.numberpaging[this.numberpaging.length - 1] < this.filter.pageNumberfilter){
      this.numberpaging = [this.filter.pageNumberfilter - 2,this.filter.pageNumberfilter - 1,this.filter.pageNumberfilter]
    }
   }
  //lấy danh sách
  getlist(){
    this.serverHttp.GetList(this.filter).subscribe((result)=> {
      this.ListMusic = result.data.data;
      this.total = result.data.data.length;
      this.filter.pageNumberfilter = result.data.paging.numberPage;    
      if(this.filter.pageNumberfilter >1){
        for(let i = 1; i<this.filter.pageNumberfilter; i++){
          if(this.numberpaging.length< this.filter.pageNumberfilter && this.numberpaging.length<3) {
            this.numberpaging.push(this.numberpaging[0]+ i);
          }
        }  
      }
    })
  }
  //xóa
  deleteMusic(id: any){
    this.serverHttp.DeleteMusic(id).subscribe((response) =>{
      if(response.data){
        alert('Xóa thành công');        
        this.getlist();
      }
    });
  }  
  refreshgetlist(){
    this.filter.content = '';
    this.getlist();
  }

}
