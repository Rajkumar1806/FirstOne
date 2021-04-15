import { Component, OnInit } from '@angular/core';
import { ShowDataService } from './showdata.service';

@Component({
  selector: 'app-showdata',
  templateUrl: './showdata.component.html',
  styleUrls: ['./showdata.component.css']
})
export class ShowdataComponent implements OnInit {
  myresult:any=[];

  constructor(private config:ShowDataService) { }

  ngOnInit(): void {
    this.config.getData()
      .subscribe((result: any) => {

        this.myresult = result.PersonalInfolistModel;
        // console.log(this.myresult)
      });
  }
  }


