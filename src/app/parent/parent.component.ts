import { Component, contentChildren, effect } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  imports: [],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent {
  private readonly children = contentChildren(ChildComponent);

  constructor() {
    effect(() => console.log(this.children().map(c => c.value())));
  }
}
