import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { UserService } from '../../services/userservice/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm !: FormGroup;
  submitted=false;

  constructor(private fb:FormBuilder, private user:UserService, private route:Router) {}

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
    console.log('Api calling starts');
    let data={
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    }
    this.user.login(data).subscribe((res:any)=>{
      localStorage.setItem('token', res.id);
      console.log(res)
      this.route.navigateByUrl('/dashboard/notes')
    })
  }

}
