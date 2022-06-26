import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, EmailValidator} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm !: FormGroup;
  submitted=false;

  constructor(private fb:FormBuilder) {}

  ngOnInit(): void {
    this.loginForm=this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
  }
  get f(){ return this.loginForm.controls;}
  onSubmit(){
    this.submitted=true;
    
    if (this.loginForm.invalid){
      return;
    }
    console.log(this.loginForm.value);
  }

}
