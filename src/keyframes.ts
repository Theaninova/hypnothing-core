import {Float, Keyword} from './elasticsearch';

export interface Keyframe<T> {
  /**
   * Timestamp ('00:42.222')
   *
   * @pattern \d+:\d{2}(\.\d+)?
   */
  at: Keyword;

  /**
   * When provided, the keyframe will ramp up at
   * the specified time in the specified time instead
   * of ramping up from the last keyframe
   */
  in?: Float;

  value: T;
}
