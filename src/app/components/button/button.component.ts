import { NgClass, NgStyle } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
  input,
} from '@angular/core';

export type TButtonType = 'small' | 'medium' | 'large';

@Component({
  selector: 'ms-button',
  standalone: true,
  imports: [NgClass, NgStyle],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Button {
  /**
   * Is this the principal call to action on the page?
   */
  primary = input(false);

  /**
   * Background color button
   */
  backgroundColor = input();

  /**
   * Button size
   */
  size = input<TButtonType>('medium');

  /**
   * Button contents
   *
   * @required
   */
  label = input<string>('button label');

  /**
   * Optional click handler
   */
  @Output()
  onClick = new EventEmitter<Event>();

  public get classes(): string[] {
    const mode = this.primary ? 'ms-button--primary' : 'ms-button--secondary';

    return ['ms-button', `ms-button--${this.size()}`, mode];
  }
}
