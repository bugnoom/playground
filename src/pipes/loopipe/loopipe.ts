import { Pipe, PipeTransform,Injectable } from '@angular/core';

/**
 * Generated class for the LoopipePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({ name: 'keys' })
@Injectable()
export class KeysPipe implements PipeTransform {
  transform(value: {}): string[] {

    if (!value) {
      return [];
    }

    return Object.keys(value);
  }
}