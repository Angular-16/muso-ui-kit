import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export type TBadge = 'default' | 'warning' | 'error' | 'success';

@Component({
  selector: 'ms-badge',
  standalone: true,
  imports: [],
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BadgeComponent {
  /** Badge type */
  type = input.required<TBadge>();
}
