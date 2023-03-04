import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  private httpheader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json, text/plain, */*',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers':
      'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Methods':'POST',
      'X-Requested-With': '*',
    }),
  }
  private REST_API_SERVER = 'https://localhost:44344/api';

  constructor(private httpClient: HttpClient) { }
  //tạo mới nhạc
  public CreateMusic(data: any){
    const url = `${this.REST_API_SERVER}/music/Create`;
    return this.httpClient
    .post<any>(url,data,this.httpheader)
    .pipe(catchError(this.handleError));
  }
  // xem danh sách nhạc
  public GetList(data: any){
    const url = `${this.REST_API_SERVER}/music/List`;
    return this.httpClient
    .post<any>(url,data,this.httpheader)
    .pipe(catchError(this.handleError));
  }
  //update UpdateMusic
  public UpdateMusic(data: any){
    const url = `${this.REST_API_SERVER}/music/update`;
    return this.httpClient
    .post<any>(url,data,this.httpheader)
    .pipe(catchError(this.handleError));
  }
  //xóa nhạc
  public DeleteMusic(data: any){
    const url = `${this.REST_API_SERVER}/music/Delete`;
    return this.httpClient
    .post<any>(url,data,this.httpheader)
    .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.error('Error occurs', error.message);
    }else{
      console.error(`Backend returned code ${error.status},`+ `body was: ${error.error}`);
    }
    return 'Error occurs';
  }
}
