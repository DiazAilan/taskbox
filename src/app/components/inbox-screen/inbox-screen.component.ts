import { Component, Input } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-inbox-screen',
  standalone: false,
  templateUrl: './inbox-screen.component.html',
  styleUrl: './inbox-screen.component.scss'
})
export default class InboxScreenComponent {
  @Input() error$: Observable<any> = of(null);
}
