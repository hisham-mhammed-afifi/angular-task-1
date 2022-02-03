import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'array',
})
export class ArrayPipe implements PipeTransform {
  transform(value: any, ...args: any) {
    return value.filter((num: any) => args.includes(num));
  }
}
