import {CreativeWork} from '../schema.org';
import {TranceDepth} from '../trance/trance';
import {HypnosisThing, HypnosisType} from '../hypnosis';
import {AudioOptions} from '../audio';
import {Reference} from '../util';
import {HypnosisSafetyGuardReference} from './hypnosis-safety';
import {HypnosisWarningReference} from './hypnosis-warning';
import {HypnosisSuggestionReference} from './hypnosis-suggestion';

/**
 * @indexable
 */
export interface HypnosisFile extends CreativeWork, HypnosisThing {
  overviewAudioOptions: AudioOptions;

  safeties: HypnosisSafetyGuardReference[];
  warnings: HypnosisWarningReference[];
  suggestions: HypnosisSuggestionReference[];

  goodbyeAudioOptions?: AudioOptions;

  minimumTranceDepth: TranceDepth;
  preferredTranceDepth: TranceDepth;

  type: HypnosisType<'file'>;
}

export type HypnosisFileReference = Reference<HypnosisFile, 'uuid'>;
