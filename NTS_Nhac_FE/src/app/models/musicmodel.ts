export class MusicBinding{
    public HourTimePlay = '';
    public MinuteTimePlay = '';
    public DatePlay = '';
    public DayofWeek = '';
    public MonthChoice = '';
    public DayofmonthChoice = '';
    public Content = '';
    public Status = '';
    public TypeMusicCode = '';
    public UploadFileId = '';
    public fileToUpload: any;
    public namefile: any;
    public _uploadFileId = '';
    public ShowContent = 0;
    public typechoice = '';
    public nametypechoice = '';
    public statuschoice = true;
}
export class MusicPayload{
    public musicId = '3fa85f64-5717-4562-b3fc-2c963f66afa6';
    public timePlay = '';
    public datePlay = '';
    public musicContent = '';
    public status: any;
    public typeMusicCode = '' ;      
    public uploadFileId = ' ';      
    public isDeleted = false;
    public createdAt = new Date();
}
export class ShowData{
    public dayofweek = [
        { Name: 'Thứ 2', value: '2' }, { Name: 'Thứ 3', value: '3'},
        { Name: 'Thứ 4', value: '4'}, { Name: 'Thứ 5', value: '5'},
        { Name: 'Thứ 6', value: '6'}, { Name: 'Thứ 7', value: '7'},
        { Name: 'Chủ nhật', value: 'cn' }
      ];
      public monthplay = [
        { Name: 'Tháng 1', value: '1'}, { Name: 'Tháng 2', value: '2'},
        { Name: 'Tháng 3', value: '3'}, { Name: 'Tháng 4', value: '4'},
        { Name: 'Tháng 5', value: '5'}, { Name: 'Tháng 6', value: '6'},
        { Name: 'Tháng 7', value: '7'}, { Name: 'Tháng 8', value: '8'},
        { Name: 'Tháng 9', value: '9'}, { Name: 'Tháng 10', value: '10'},
        { Name: 'Tháng 11', value: '11'}, { Name: 'Tháng 12', value: '12'},
      ];
      public dayofmonth = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
      public status = [{ Name: 'Đang hoạt động', value: true }, { Name: 'Dừng hoạt động', value: false },]
}
   


  
  
  