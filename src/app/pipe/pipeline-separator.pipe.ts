import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipelineSeparator',
  standalone: true
})
export class PipelineSeparatorPipe implements PipeTransform {

  transform(value: string[]): string {
    return value.join(' | ');
  }
}
