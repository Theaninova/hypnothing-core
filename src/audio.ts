import {Keyframe} from './keyframes';

export type VolumeKeyframe = Keyframe<VolumeChoice>;

export interface BinauralBeat {
  volume: VolumeChoice;
  wave: BinauralWaveChoice;
}

export type BinauralKeyframe = Keyframe<BinauralBeat>;

/**
 * TODO: check if this works
 *
 * https://www.psychologytoday.com/us/basics/binaural-beats
 *
 * @keyword
 */
export enum BinauralWaveChoice {
  BETA = 'beta',
  ALPHA = 'alpha',
  DELTA = 'delta',
  THETA = 'theta',
}

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
