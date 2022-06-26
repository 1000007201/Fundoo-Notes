import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm !: FormGroup;
  submitted = false;

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.registerForm=this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirm: ['', Validators.required]
    })
  }
  get f() { return this.registerForm.controls; }
  onSubmit(){
    this.submitted=true;
    if (this.registerForm.invalid){
      return;
    }
    console.log(this.registerForm.value);
  }
}