import {CreativeWork} from '../schema.org';
import {TranceDepth, TranceSection} from './trance';
import {HypnosisThing, HypnosisType} from '../hypnosis/hypnosis';

/**
 * @indexable
 */
export interface TranceInduction extends CreativeWork, TranceSection, HypnosisThing {
  /**
   * @keyword
   */
  src: string;
  tranceDepthRating: TranceDepth;

  type: HypnosisType.INDUCTION;
}
