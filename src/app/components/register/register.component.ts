import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/userservice/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm !: FormGroup;
  submitted = false;
  show:boolean=false;
  input:string='password'

  constructor(private fb:FormBuilder , private user:UserService) { }

  ngOnInit(): void {
    this.registerForm=this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirm: ['', Validators.required],
      service:'advance'
    })
  }
  get f() { return this.registerForm.controls; }
  onSubmit(){
    this.submitted=true;
    if (this.registerForm.invalid){
      return;
    }
    console.log('form is valid');
    let data={
      firstName: this.registerForm.value.firstname,
      lastName: this.registerForm.value.lastname,
      email: this.registerForm.value.username,
      password: this.registerForm.value.password,
      service: this.registerForm.value.service
    }
    this.user.register(data).subscribe((res:any)=>{
      console.log(res);
    })
  }
  changeType(){
    if (this.show == true){
      this.input='password';
      this.show=false
    }
    else{
      this.input='text';
      this.show=true
    }
  }
}