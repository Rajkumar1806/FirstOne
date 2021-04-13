import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ShowDataService {
  public snippet;

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get('/assets/display.json');
  }

  ngOnInit(){
    this.getData()
    .subscribe(data => {
      console.log(data);
      this.snippet = data;
    });
}
  }
