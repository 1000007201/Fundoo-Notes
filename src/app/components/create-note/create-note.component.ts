import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { NoteService } from 'src/app/services/noteservice/note.service';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {
  createNoteForm !: FormGroup
  flag=false;
  token:any

  constructor(private fb:FormBuilder, private note:NoteService) { }

  ngOnInit(): void {
    this.createNoteForm=this.fb.group({
      title:[''],
      desc:['']
    })
    this.token = localStorage.getItem('token');
  }
  open(){
    this.flag=true
  }
  onSubmit(){
    this.flag=false
    let data={
      'title': this.createNoteForm.value.title,
      'description': this.createNoteForm.value.desc
    }
    
    console.log('Api calling starts..')
    console.log(this.token)
    console.log(data)
    this.note.create_note(data, this.token).subscribe((res)=>{
      console.log(res);
    })
  }

}
