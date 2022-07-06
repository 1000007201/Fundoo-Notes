import { Component, OnInit, Input, Inject, Output, EventEmitter } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DataService } from 'src/app/services/dataservice/data.service';
import { NoteService } from 'src/app/services/noteservice/note.service';
import { UpdateNoteComponent } from '../update-note/update-note.component';

@Component({
  selector: 'app-display-note',
  templateUrl: './display-note.component.html',
  styleUrls: ['./display-note.component.scss']
})
export class DisplayNoteComponent implements OnInit {
  noteId:any;
  subcription: any
  message:any
  isGrid:any= true;
  view:any

  @Input() childMessage: any;
  @Output() messageEvent = new EventEmitter<any>();

  constructor(public dialog: MatDialog, public note:NoteService, private data:DataService) { }
  ngOnInit(): void {
    this.data.currentMessage.subscribe((message)=>{
      this.message = message
      console.log(this.message)
    })
    this.data.currentView.subscribe((flag)=>{
      this.isGrid=flag
      console.log(this.isGrid)
    })
  }
  onclick(id:any){
    this.noteId=id;
  }

  openDialog(note:any): void {
    const dialogRef = this.dialog.open(UpdateNoteComponent, {
      panelClass: 'custom-dialog-container',
      width: '500px',
      data:note
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
  receiveMessage(event:any){
    console.log(event)
    this.messageEvent.emit(event)
  }
}
