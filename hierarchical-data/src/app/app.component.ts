import { Component } from '@angular/core';
import { TreeNodeComponent } from './tree-node/tree-node.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [TreeNodeComponent],
})
export class AppComponent {
  tree = {
    a: ['b', 'c'],
    b: ['d', 'e'],
    c: ['f', 'g'],
    e: ['h', 'i'],
    f: ['j', 'k']
  };
}
