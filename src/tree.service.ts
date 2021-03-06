import {NodeRemovedEvent, NodeRenamedEvent, NodeCreatedEvent, NodeSelectedEvent, NodeMovedEvent, NodeFoldedEvent} from './tree.types';
import {Subject} from 'rxjs/Rx';
import {Injectable} from '@angular/core';

@Injectable()
export class TreeService {
  public nodeMoved$: Subject<NodeMovedEvent> = new Subject<NodeMovedEvent>();
  public nodeRemoved$: Subject<NodeRemovedEvent> = new Subject<NodeRemovedEvent>();
  public nodeRenamed$: Subject<NodeRenamedEvent> = new Subject<NodeRenamedEvent>();
  public nodeCreated$: Subject<NodeCreatedEvent> = new Subject<NodeCreatedEvent>();
  public nodeSelected$: Subject<NodeSelectedEvent> = new Subject<NodeSelectedEvent>();
  public nodeFolded$: Subject<NodeFoldedEvent> = new Subject<NodeFoldedEvent>();
}

@Injectable()
export class TreeState {
  public menuItems: any;
}