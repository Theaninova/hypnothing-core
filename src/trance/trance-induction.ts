import {CreativeWork} from '../schema.org';
import {TranceDepth, TranceSection} from './trance';
import {HypnosisThing, HypnosisType} from '../hypnosis';
import {AudioOptions} from '../audio';

/**
 * @indexable
 */
export interface TranceInduction extends CreativeWork, TranceSection, HypnosisThing {
  audioOptions: AudioOptions;
  tranceDepthRating: TranceDepth;

  type: HypnosisType.INDUCTION;
}
