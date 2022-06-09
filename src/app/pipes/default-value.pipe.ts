import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultValue'
})
export class DefaultValuePipe implements PipeTransform {

  transform(value: any, ...args: string[]): string {
    if (value) {
      return value;
    }
    return args[0] || '---';
  }

}
