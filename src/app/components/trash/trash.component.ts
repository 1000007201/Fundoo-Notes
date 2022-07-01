import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteservice/note.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
  result:any;

  constructor(private note:NoteService) { }

  ngOnInit(): void {
    this.note.get_trash_note().subscribe((res:any)=>{
      console.log(res)
      this.result=res.data.data
    })
  }
}
