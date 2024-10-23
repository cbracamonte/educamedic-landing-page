import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toArrayPipe',
  standalone: true,
})
export class ToArrayPipe implements PipeTransform {
  transform(value: any): any[] {
    return Array(value).fill(0);
  }
}
