import { NgClass, NgStyle } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  input,
  Input,
} from '@angular/core';

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
  label = input.required();

  /**
   * Placeholder size
   */
  size = input<TPlaceholderSize>('medium');

  /**
   * Placeholder background color
   */
  backgroundColor = input<TPlaceholderBackgroundColor>('white');

  public get classes(): string[] {
    return ['placeholder', `placeholder--${this.size()}`];
  }
}
