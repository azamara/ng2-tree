import {Injectable, EventEmitter} from '@angular/core';
import {Subject} from 'rxjs/Rx';
import {NodeMenuEvent} from './menu.types';

@Injectable()
export class NodeMenuService {
  public nodeMenuEvents$: Subject<NodeMenuEvent> = new Subject<NodeMenuEvent>();
  public event: EventEmitter<any> = new EventEmitter<any>();
}
