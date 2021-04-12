import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
  loginform:FormGroup;
  submitted = false;

  constructor(private formbuilders:FormBuilder,private router: Router) { }

  ngOnInit(): void {
    this.loginform = this.formbuilders.group({
      email: ['',[Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      passwords: [ '', [Validators.required]]
    })
  }

  get f() {
     return this.loginform.controls; 
    }


  submit(){
    console.log(this.loginform);

    this.submitted = true;
    if (this.loginform.invalid) {
      return;
  }
  this.router.navigate(['/app-registration-form']);
  }

}
