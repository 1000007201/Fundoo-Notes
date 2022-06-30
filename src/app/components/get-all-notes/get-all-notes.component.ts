import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteservice/note.service';

@Component({
  selector: 'app-get-all-notes',
  templateUrl: './get-all-notes.component.html',
  styleUrls: ['./get-all-notes.component.scss']
})
export class GetAllNotesComponent implements OnInit {
  token:any;
  notesValue:any;

  constructor(private note:NoteService) { }

  ngOnInit(): void {
    this.token=localStorage.getItem('token')
    this.note.get_note(this.token).subscribe((res:any)=>{
      console.log(res.data.data)
      this.notesValue = res.data.data
    })
  }

}
