import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TreeNodeComponent } from './tree-node/tree-node.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TreeNodeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'hierarchical-data';
  tree = {
    a:['b','c'],
    b:['d','e'],
    c:['f','g'],
    e:['h','i'],
    f:['j','k']
  }
}
