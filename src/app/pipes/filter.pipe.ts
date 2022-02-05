import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any, ...args: any) {
    return value.filter((num: any) => args.includes(num));
  }
}
