import { Component, OnInit, Input } from '@angular/core';
import { NoteService } from 'src/app/services/noteservice/note.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  @Input() childmessage: any;
  constructor(private note:NoteService) { }

  ngOnInit(): void {
  }
  archive(){
    let data={
      noteIdList: [this.childmessage],
      isArchived: true,
    }
    this.note.archive_note(data).subscribe((res:any)=>{
      console.log(res)
    })
  }
  delete(){
    let data={
      noteIdList: [this.childmessage],
      isDeleted: true
    }
    this.note.delete_note(data).subscribe((res:any)=>{
      console.log(res);
    })
  }

}
