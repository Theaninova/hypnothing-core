import {CreativeWork, Uuid} from '../schema.org';
import {TranceDepth} from '../trance/trance';
import {HypnosisThing, HypnosisType} from '../hypnosis';

/**
 * @indexable
 */
export interface HypnosisFile extends CreativeWork, HypnosisThing {
  /**
   * @keyword
   */
  overviewSrc: string;
  safeties: Uuid[];
  warnings: Uuid[];
  suggestions: Uuid[];

  /**
   * @keyword
   */
  goodbyeSrc?: string;

  minimumTranceDepth: TranceDepth;
  preferredTranceDepth: TranceDepth;

  type: HypnosisType.FILE;
}
