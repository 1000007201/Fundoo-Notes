import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterpipe'
})
export class FilterpipePipe implements PipeTransform {

  transform(value:any, filterstring:string){
    if (value.length === 0 || filterstring.length === 0){
      return value;
    }
    const notes = [];
    for (const note of value){
      if (note['title'] == filterstring){
        notes.push(note)
      }
    }
    return notes;
  }

}
