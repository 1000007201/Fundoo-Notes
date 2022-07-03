import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoteService } from 'src/app/services/noteservice/note.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  colors: Array<any> = [
    { code: '#ffffff', name: 'white' },
    { code: '#FF6347', name: 'red' },
    { code: '#FF4500', name: 'orange' },
    { code: '#FFFF00', name: 'yellow' },
    { code: '#ADFF2F', name: 'green' },
    { code: '#43C6DB', name: 'teal' },
    { code: '#728FCE', name: 'Blue' },
    { code: '#2B65EC', name: 'darkblue' },
    { code: '#D16587', name: 'purple' },
    { code: '#F9A7B0', name: 'pink' },
    { code: '#E2A76F', name: 'brown' },
    { code: '#D3D3D3', name: 'grey'}
  ]
  @Input() childmessage: any;
  constructor(private note:NoteService, private route:ActivatedRoute) {}
  param:any
  ngOnInit(): void {
    this.param=this.route.snapshot.url[0].path;
    console.log(this.param)
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
  change_color(note_color:any){
    let data={
      noteIdList: [this.childmessage],
      color: note_color
    }
    this.param=this.route.snapshot.params;
    console.log(this.param)
    this.note.change_note_color(data).subscribe((res)=>{
      console.log(res);
    })
  }

}
