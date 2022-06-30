import { Injectable } from '@angular/core';
import { HttpService } from '../httpservice/http.service';
import { HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private http:HttpService) { }

  create_note(data:any, token:any){
    let header= {
      headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': token
    })
  }
    return this.http.postService('notes/addNotes', data, true, header)
  }
  get_note(token:any){
    let header= {
      headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': token
    })
  }
    return this.http.getService('notes/getNotesList', true, header)
  }
}
