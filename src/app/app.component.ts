import {
  ChangeDetectionStrategy,
  Component,
  signal,
} from '@angular/core';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [ParentComponent, ChildComponent],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  protected readonly values = signal(['a', 'b', 'c']);
}
