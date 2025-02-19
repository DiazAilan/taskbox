import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pure-inbox-screen',
  standalone: false,
  templateUrl: './pure-inbox-screen.component.html',
  styleUrl: './pure-inbox-screen.component.scss'
})
export default class PureInboxScreenComponent {
  @Input() error: any;
}
