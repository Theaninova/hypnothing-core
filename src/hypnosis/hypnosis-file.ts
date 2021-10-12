import {CreativeWork} from '../schema.org';
import {TranceDepth} from '../trance/trance';
import {HypnosisThing, HypnosisType} from '../hypnosis';
import {AudioOptions, ThingWithAudio} from '../audio';
import {Reference} from '../util';
import {HypnosisSafetyGuardReference} from './hypnosis-safety';
import {HypnosisWarningReference} from './hypnosis-warning';
import {HypnosisSuggestionReference} from './hypnosis-suggestion';

/**
 * @indexable
 */
export interface HypnosisFile
  extends CreativeWork,
    HypnosisThing,
    ThingWithAudio<[AudioOptions, AudioOptions]> {
  safeties: HypnosisSafetyGuardReference[];
  warnings: HypnosisWarningReference[];
  suggestions: HypnosisSuggestionReference[];

  minimumTranceDepth: TranceDepth;
  preferredTranceDepth: TranceDepth;

  type: HypnosisType<'file'>;
}

export type HypnosisFileReference = Reference<HypnosisFile, 'uuid'>;

/**
 * Hypnosis File type guard
 */
export function isHypnosisFile(thing: HypnosisThing): thing is HypnosisFile {
  return thing.type === 'file';
}
