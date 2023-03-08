export class MusicBinding{
    public hourTimePlay = '';
    public minuteTimePlay = '';
    public datePlay = '';
    public dayofWeek = '';
    public monthChoice = '';
    public dayofMonthChoice = '';
    public status = '';
    public uploadFileId = '';
    public fileToUpload: any;
    public nameFile: any;
    public showContent = 0;
    public typeChoice = '';
    public nameTypeChoice = '';
    public statusChoice: any;
}
export class FilterMusic{
  public content = '';
  public pageSize = 10;
  public pageNumber = 0;
  public pageNumberFilter = 0;

}
export class MusicofYear{
  public dayofMonths = '';
  public monthPlay = '';

}
export class MusicPayload{
    public musicId = '3fa85f64-5717-4562-b3fc-2c963f66afa6';
    public timePlay = '';
    public datePlay: any;
    public musicContent = '';
    public status : any;
    public typeMusicCode = '' ;      
    public uploadFileId = ' ';      
    public isDeleted = false;
    public createdAt = new Date();
}
export class ShowData{
    public dayofWeeks = [
        { name: 'Thứ 2', value: '2' }, { name: 'Thứ 3', value: '3'},
        { name: 'Thứ 4', value: '4'}, { name: 'Thứ 5', value: '5'},
        { name: 'Thứ 6', value: '6'}, { name: 'Thứ 7', value: '7'},
        { name: 'Chủ nhật', value: 'cn' }
      ];
      public monthPlays = [
        { name: 'Tháng 1', value: '1'}, { name: 'Tháng 2', value: '2'},
        { name: 'Tháng 3', value: '3'}, { name: 'Tháng 4', value: '4'},
        { name: 'Tháng 5', value: '5'}, { name: 'Tháng 6', value: '6'},
        { name: 'Tháng 7', value: '7'}, { name: 'Tháng 8', value: '8'},
        { name: 'Tháng 9', value: '9'}, { name: 'Tháng 10', value: '10'},
        { name: 'Tháng 11', value: '11'}, { name: 'Tháng 12', value: '12'},
      ];
      public dayofMonths= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
      public status = [{ name: 'Đang hoạt động', value: true }, { name: 'Dừng hoạt động', value: false },]
      
      
}

   


  
  
  