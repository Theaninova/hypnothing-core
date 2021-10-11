import {Keyframe} from './keyframes';
import {HypnosisThing, HypnosisType} from './hypnosis';
import {Uuid} from './schema.org';

export type VolumeKeyframe = Keyframe<VolumeChoice>;

export interface BinauralBeat {
  volume: VolumeChoice;
  wave: BinauralWaveChoice;
}

/**
 * Timestamp ('00:42.222')
 *
 * @pattern \d+:\d{2}(\.\d+)?
 */
export type Timestamp = string;

export interface AudioFile extends HypnosisThing {
  slice?: {
    start?: Timestamp;
    end?: Timestamp;
  };
  src: string;

  /**
   * @keyword
   */
  language: string;

  speaker: Uuid;

  type: HypnosisType.AUDIO_FILE;
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
