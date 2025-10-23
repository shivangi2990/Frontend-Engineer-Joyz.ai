import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-tree-node',
  standalone: true,
  imports: [CommonModule  ],
  templateUrl: './tree-node.component.html',
  styleUrl: './tree-node.component.scss'
})
export class TreeNodeComponent {
@Input() nodeKey!: string;
@Input() tree!: Record<string, string[]>;
get children(): string[]{
  return this.tree[this.nodeKey] ?? []
}

}
