import {Keyframe} from './keyframes';
import {HypnosisThing, HypnosisType} from './hypnosis';
import {AuthorReference} from './schema.org';
import {Reference} from './util';
import {Keyword, KeywordLiteral} from './elasticsearch';

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
export type Timestamp = Keyword;

export type AudioOptions = AudioReference[];

export type AudioReference = Reference<AudioFile, 'uuid' | 'language' | 'speaker'>;

export interface AudioFile extends HypnosisThing {
  slice?: {
    start?: Timestamp;
    end?: Timestamp;
  };
  src: Keyword;

  language: Keyword;

  speaker: AuthorReference;

  type: HypnosisType<'audio file'>;
}

export type BinauralKeyframe = Keyframe<BinauralBeat>;

/**
 * https://www.psychologytoday.com/us/basics/binaural-beats
 */
export type BinauralWaveChoice = KeywordLiteral<'beta' | 'alpha' | 'delta' | 'theta'>;

export type VolumeChoice = KeywordLiteral<'off' | 'silent' | 'normal' | 'loud' | 'inherit' | 'prefetch'>;
