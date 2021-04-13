import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadComponent } from './upload.component';
import { BrowserModule } from '@angular/platform-browser';




@NgModule({
  declarations: [UploadComponent],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports:[
    UploadComponent
  ]
})
export class UploadModule { }