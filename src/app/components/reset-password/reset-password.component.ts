import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms'
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/userservice/user.service'

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  resetForm !: FormGroup;
  submitted=false;
  token:any;

  constructor(private fb:FormBuilder, private user:UserService, private reset:ActivatedRoute) { }

  ngOnInit(): void {
    this.resetForm=this.fb.group({
      newpassword: ['', Validators.required],
      confirmpassword: ['', [Validators.required]]
    })
    this.token = this.reset.snapshot.params['token']
  }
  get f(){ return this.resetForm.controls;}
  onSubmit(){
    this.submitted=true;

    if (this.resetForm.invalid){
      return;
    }
    console.log('Api calling starts');
    let data={
      newPassword: this.resetForm.value.newpassword
    }
    this.user.resetPassword(data, this.token).subscribe((res:any) => {
      console.log(res);
    })

  }

}
