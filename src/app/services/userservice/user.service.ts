import { Injectable } from '@angular/core';
import { HttpService } from "../httpservice/http.service"
import { HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpService) { }

  register(data:any){
    let header={
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
    return this.http.postService('user/userSignUp', data, false, header)
  }
  login(data:any){
    let header={
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    }
    return this.http.postService('user/login', data, false, header);
  }
  forgot(data:any){
    let header={
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    }
    return this.http.postService('user/reset', data, false, header);
  }
}
