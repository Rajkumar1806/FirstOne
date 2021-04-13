import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  imageUrl : string = "/assets/download.png"
  fileToUpload : File = null;
  data: string;

  constructor() { }

  ngOnInit(): void {
  }


  handleFileInput(file: FileList){
    this.fileToUpload = file.item(0);
  
   var reader = new FileReader();
   reader.onload = (event:any) => {
     this.imageUrl = event.target.result;
   }
    
    reader.readAsDataURL(this.fileToUpload);
  
  }
  


}
