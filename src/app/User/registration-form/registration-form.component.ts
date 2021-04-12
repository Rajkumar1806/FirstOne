import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  registrationform: FormGroup
  isSubmitted = false;

  constructor(private formbuilders:FormBuilder) { 
    
  }

  ngOnInit(): void {
    this.registrationform = this.formbuilders.group({
      fname: new FormControl('', Validators.compose([Validators.required])),
      lname: new FormControl('', Validators.compose([Validators.required])),
      email: new FormControl('', Validators.compose([Validators.required])),
      mnumber:new FormControl('', Validators.compose([Validators.required])),
      gender: new FormControl('', Validators.compose([Validators.required])),
      address: new FormControl('', Validators.compose([Validators.required])),
      passwords: new FormControl('', Validators.compose([Validators.required])),
      confirmpassword: new FormControl('', Validators.compose([Validators.required])),
    },
    {
      validators: this.passwords.bind(this)
    }
    );
  }
  get f(){
    return this.registrationform.controls;
  }
    submit(){
      this.isSubmitted = true;
      if (this.registrationform.invalid) {
        return;
    }

    }


    error_messages = {
      'fname': [
        { type: 'required', message: 'First Name is required.' },
      ],
  
      'lname': [
        { type: 'required', message: 'Last Name is required.' }
      ],
  
      'email': [
        { type: 'required', message: 'Email is required.' },
        { type: 'minlength', message: 'Email length.' },
        { type: 'maxlength', message: 'Email length.' },
        { type: 'required', message: 'please enter a valid email address.' }
      ],
      'mnumber': [
        { type: 'required', message: 'Mobile number is required.' },
        { type: 'minlength', message: 'password length.' },
        { type: 'maxlength', message: 'password length.' }
      ],
      'gender': [
        { type: 'required', message: 'Gender is required.' }
      ],
      'address': [
        { type: 'required', message: 'Address is required.' }
      ],
  
      'passwords': [
        { type: 'required', message: 'password is required.' },
        { type: 'minlength', message: 'password length.' },
        { type: 'maxlength', message: 'password length.' }
      ],
      'confirmpassword': [
        { type: 'required', message: 'password is required.' },
        { type: 'minlength', message: 'password length.' },
        { type: 'maxlength', message: 'password length.' }
      ],
    }

    passwords(formGroup: FormGroup) {
      const { value: password } = formGroup.get('passwords');
      const { value: confirmPassword } = formGroup.get('confirmpassword');
      return password === confirmPassword ? null : { passwordNotMatch: true };
    }
}
