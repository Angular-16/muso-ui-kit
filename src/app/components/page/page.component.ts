import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ms-page',
  standalone: true,
  imports: [],
  templateUrl: './page.component.html',
  styleUrl: './page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Page {}
