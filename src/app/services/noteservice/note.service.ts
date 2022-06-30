import { Injectable } from '@angular/core';
import { HttpService } from '../httpservice/http.service';
import { HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  token:any=localStorage.getItem('token')

  constructor(private http:HttpService) { }

  create_note(data:any){
    let header= {
      headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.token
    })
  }
    return this.http.postService('notes/addNotes', data, true, header)
  }
  get_note(){
    let header= {
      headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.token
    })
  }
    return this.http.getService('notes/getNotesList', true, header)
  }
  update_note(data:any){
    let header={
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
      })
    }
      return this.http.postService('notes/updateNotes', data, true, header)
  }
}