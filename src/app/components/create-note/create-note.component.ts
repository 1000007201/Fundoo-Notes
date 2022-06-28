import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {
  flag=false;

  constructor() { }

  ngOnInit(): void {
  }
  open(){
    this.flag=true
  }
  close(){
    this.flag=false
  }

}
