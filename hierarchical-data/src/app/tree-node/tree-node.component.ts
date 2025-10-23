import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
CommonModule
@Component({
  selector: 'app-tree-node',
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class TreeNodeComponent {
  @Input() nodeKey!: string;
  @Input() tree!: Record<string, string[]>;

  get children(): string[] {
    return this.tree[this.nodeKey] || [];
  }
}
