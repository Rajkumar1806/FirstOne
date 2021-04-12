import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShowdataComponent } from './showdata.component';




@NgModule({
  declarations: [ShowdataComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[
    ShowdataComponent
  ]
})
export class ShowDataModule { }