import {Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NoteService } from 'src/app/services/noteservice/note.service';

@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.scss']
})
export class UpdateNoteComponent implements OnInit {
  title:any;
  description:any
  constructor(
    public dialogRef: MatDialogRef<UpdateNoteComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    private note:NoteService
  ) {}
  ngOnInit(): void {
    this.title=this.data.title;
    this.description = this.data.description;
  }
  update(){
    let data={
      'noteId': this.data.id,
      'title': this.title,
      'description': this.description
    }
    this.note.update_note(data).subscribe((res:any)=>{
      console.log(res);
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}