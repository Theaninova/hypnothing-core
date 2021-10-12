import {CreativeWork} from '../schema.org';
import {TranceDepth} from '../trance/trance';
import {HypnosisThing, HypnosisType} from '../hypnosis';
import {AudioReference} from '../audio';
import {Reference} from '../util';
import {HypnosisSafetyGuardReference} from './hypnosis-safety';
import {HypnosisWarningReference} from './hypnosis-warning';
import {HypnosisSuggestionReference} from './hypnosis-suggestion';

/**
 * @indexable
 */
export interface HypnosisFile extends CreativeWork, HypnosisThing {
  overviewAudioOptions: AudioReference;

  safeties: HypnosisSafetyGuardReference[];
  warnings: HypnosisWarningReference[];
  suggestions: HypnosisSuggestionReference[];

  goodbyeAudioOptions?: AudioReference;

  minimumTranceDepth: TranceDepth;
  preferredTranceDepth: TranceDepth;

  type: HypnosisType.FILE;
}

export type HypnosisFileReference = Reference<HypnosisFile, undefined>;
