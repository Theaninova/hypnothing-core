import {Keyframe} from './keyframes';
import {
  HypnosisThing,
  HypnosisThingTranslatableProperties,
  HypnosisType,
  TranslatableThing,
} from './hypnosis';
import {AuthorReference} from './schema.org';
import {KeysOf, Reference} from './util';
import {Keyword, KeywordLiteral} from './elasticsearch';

export type VolumeKeyframe = Keyframe<VolumeChoice>;

export interface BinauralBeat {
  volume: VolumeChoice;
  wave: BinauralWaveChoice;
}

/**
 * Warning, this has to be maintained...
 */
export interface ThingWithAudio<T extends AudioOptions[]> {
  audio: T;
}

/**
 * Thing with audio type guard
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export function isThingWithAudio(thing: object): thing is ThingWithAudio<AudioOptions[]> {
  return 'audio' in thing;
}

/**
 * Timestamp ('00:42.222')
 *
 * @pattern \d+:\d{2}(\.\d+)?
 */
export type Timestamp = Keyword;

export type AudioOptions = AudioReference[];

export type AudioReference = Reference<AudioFile, 'uuid' | 'language' | 'speaker'>;

export interface AudioFile
  extends HypnosisThing,
    TranslatableThing<KeysOf<AudioFile, HypnosisThingTranslatableProperties | 'language'>> {
  slice?: {
    start?: Timestamp;
    end?: Timestamp;
  };
  src: Keyword;

  language: Keyword;

  speaker: AuthorReference;

  /**
   * Keyframes of where the binaural should start or stop or change in loudness
   */
  binauralKeyframes?: BinauralKeyframe[];
  noiseKeyframes?: VolumeKeyframe[];

  /**
   * If the audio file already contains binaurals.
   *
   * The specified keyframes will still be respected for blending between other sections.
   */
  bakedBinaurals?: boolean;
  bakedNoise?: boolean;

  type: HypnosisType<'audio file'>;
}

export type BinauralKeyframe = Keyframe<BinauralBeat>;

/**
 * Hypnosis File type guard
 */
export function isAudioFile(thing: HypnosisThing): thing is AudioFile {
  return thing.type === 'audio file';
}

/**
 * https://www.psychologytoday.com/us/basics/binaural-beats
 */
export type BinauralWaveChoice = KeywordLiteral<'beta' | 'alpha' | 'delta' | 'theta'>;

export type VolumeChoice = KeywordLiteral<'off' | 'silent' | 'normal' | 'loud' | 'inherit' | 'prefetch'>;
