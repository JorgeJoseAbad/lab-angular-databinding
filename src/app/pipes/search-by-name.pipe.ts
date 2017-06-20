import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchByName'
})
export class SearchByNamePipe implements PipeTransform {

  transform(items: any[], field: string, value: string): any[] {
    if (!items) {
      return [];
    }

    if (!value) {
      return items;
    }

    return items.filter(it => it[field].match(new RegExp(value, 'i')));
  }
  /*transform(value: any, args?: any): any {
    return null;
  }*/

}
