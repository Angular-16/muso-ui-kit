import { NgClass, NgStyle } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export type TPlaceholderSize = 'small' | 'medium' | 'large';
export type TPlaceholderBackgroundColor = 'white' | 'black';

@Component({
  selector: 'ms-placeholder',
  standalone: true,
  imports: [NgClass, NgStyle],
  templateUrl: './placeholder.component.html',
  styleUrl: './placeholder.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Placeholder {
  /**
   * Placeholder label
   * @required
   */
  @Input({ required: true })
  label = 'Placeholder';

  /**
   * Placeholder size
   */
  @Input()
  size: TPlaceholderSize = 'medium';

  /**
   * Placeholder background color
   */
  @Input()
  backgroundColor?: TPlaceholderBackgroundColor = 'white';

  public get classes(): string[] {
    return ['placeholder', `placeholder--${this.size}`];
  }
}
