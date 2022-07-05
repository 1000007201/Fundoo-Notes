import {Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteService } from 'src/app/services/noteservice/note.service';

@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.scss']
})
export class UpdateNoteComponent implements OnInit {
  color:any;
  title:any;
  description:any
  constructor(
    public dialogRef: MatDialogRef<UpdateNoteComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    private note:NoteService, private snack:MatSnackBar
  ) {}
  ngOnInit(): void {
    this.title=this.data.title;
    this.description = this.data.description;
    this.color=this.data.color
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
    this.dialogRef.close();
    this.openSnackBar('Note Updated')
  }
  receiveMessage(event:any){
    console.log(event);
    this.color=event;
  }
  openSnackBar(message: string) {
    this.snack.open(message, 'Close', {duration:2000});
   }
}