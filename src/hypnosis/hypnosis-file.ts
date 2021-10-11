import {CreativeWork, Uuid} from '../schema.org';
import {TranceDepth} from '../trance/trance';
import {HypnosisThing, HypnosisType} from '../hypnosis';
import {AudioOptions} from '../audio';

/**
 * @indexable
 */
export interface HypnosisFile extends CreativeWork, HypnosisThing {
  overviewAudioOptions: AudioOptions;

  safeties: Uuid[];
  warnings: Uuid[];
  suggestions: Uuid[];

  goodbyeAudioOptions?: AudioOptions;

  minimumTranceDepth: TranceDepth;
  preferredTranceDepth: TranceDepth;

  type: HypnosisType.FILE;
}
