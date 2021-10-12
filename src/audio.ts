import {Keyframe} from './keyframes';
import {HypnosisThing, HypnosisType} from './hypnosis';
import {AuthorReference, Uuid} from './schema.org';
import {Reference} from './util';

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

export type AudioReference = Reference<AudioFile, 'language' | 'speaker'>;

/**
 * This is unfortunately needed to enable filtering
 */
export interface AudioOption {
  /**
   * @keyword
   */
  language: 'en';
  speaker: Uuid;
  reference: Uuid;
}

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

  speaker: AuthorReference;

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
