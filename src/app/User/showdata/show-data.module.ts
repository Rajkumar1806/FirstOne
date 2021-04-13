import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowdataComponent } from './showdata.component';
import { BrowserModule } from '@angular/platform-browser';




@NgModule({
  declarations: [ShowdataComponent],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports:[
    ShowdataComponent
  ]
})
export class ShowDataModule { }