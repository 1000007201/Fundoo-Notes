import { Component, OnInit, Input, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NoteService } from 'src/app/services/noteservice/note.service';
import { UpdateNoteComponent } from '../update-note/update-note.component';

@Component({
  selector: 'app-display-note',
  templateUrl: './display-note.component.html',
  styleUrls: ['./display-note.component.scss']
})
export class DisplayNoteComponent implements OnInit {
  noteId:any;

  @Input() childMessage: any;

  constructor(public dialog: MatDialog, public note:NoteService) { }
  ngOnInit(): void {
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
  }
