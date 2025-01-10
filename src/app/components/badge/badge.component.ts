import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export type TBadgeType = 'default' | 'warning' | 'error' | 'success';

@Component({
  selector: 'ms-badge',
  standalone: true,
  imports: [],
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.css',
  host: { class: `default` },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BadgeComponent {
  @Input({
    alias: 'type',
    required: false,
  })
  badgeType: TBadgeType = 'default';
}
