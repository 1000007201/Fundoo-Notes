import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteService } from 'src/app/services/noteservice/note.service';

@Component({
  selector: 'app-get-all-notes',
  templateUrl: './get-all-notes.component.html',
  styleUrls: ['./get-all-notes.component.scss']
})
export class GetAllNotesComponent implements OnInit {
  token:any;
  notesValue:any;
  result:any;

  constructor(private note:NoteService, private snack:MatSnackBar) { }

  ngOnInit(): void {
    this.get_all_note();
  }
  get_all_note(){
    this.note.get_note().subscribe((res:any)=>{
      console.log(res.data.data)
      this.result = res.data.data
      this.notesValue = this.result.filter((obj:any)=>{
        return obj.isDeleted===false && obj.isArchived===false
      })
    })
  }
  receiveMessage(event:any){
    console.log(event)
    this.get_all_note();
  }
}
