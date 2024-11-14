import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatSeparator',
  standalone: true
})
export class FormatSeparatorPipe implements PipeTransform {

  transform(value: string[]): string {
    return value.join(' | ');
  }
}
