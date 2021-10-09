import {Keyframe} from './keyframes';

export type VolumeKeyframe = Keyframe<VolumeChoice>;

/**
 * TODO: check if this works
 *
 * @keyword
 */
export enum VolumeChoice {
  OFF = 'off',
  SILENT = 'silent',
  NORMAL = 'normal',
  LOUD = 'loud',
  /**
   * Use previous or value
   */
  INHERIT = 'inherit',
  /**
   * Use next value
   */
  PREFETCH = 'prefetch',
}
