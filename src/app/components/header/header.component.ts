import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ms-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Header {}
