import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(arr: any[], key: string, value: any): any[] {
    return arr.filter( item => item[key] === value);
  }

}
