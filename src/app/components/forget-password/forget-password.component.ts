import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { UserService } from '../../services/userservice/user.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  forgotForm !: FormGroup;
  submitted=false;

  constructor(private fb:FormBuilder, private user:UserService) { }

  ngOnInit(): void {
    this.forgotForm= this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    })
  }
  get f(){return this.forgotForm.controls;}

  onSubmit(){
    this.submitted=true;

    if (this.forgotForm.invalid){
      return;
    }
    
    console.log('Api calling starts');
    let data={
      email:this.forgotForm.value.email
    }
    this.user.forgot(data).subscribe((res:any) =>{
      console.log(res);
    })
  }

}
