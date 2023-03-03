import { Component, OnInit } from '@angular/core';
import { MusicService } from 'src/app/services/music.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-musicmanagement',
  templateUrl: './musicmanagement.component.html',
  styleUrls: ['./musicmanagement.component.css']
})
export class MusicmanagementComponent{ 
  constructor(private serverHttp: MusicService) { }
  public searchcontentmusic = new FormGroup({
    content: new FormControl('')
  })
  public ispopupAdd = false;
  public total : any;
  public ListMusic = null;
  ngOnInit(): void {
    this.serverHttp.GetList().subscribe((result)=> {
      this.ListMusic = result.data;
      this.total = result.data.length;
    })
    
  } 
  //popup thêm mới
  openModal(){
    this.ispopupAdd = true;

  }
  createmusic(data: any){
    this.serverHttp.CreateMusic("").subscribe((result)=> {

    })
  }
  

}
