import {CreativeWork} from '../schema.org';
import {HypnosisSafetyGuard} from './hypnosis-safety';
import {TranceDepth} from '../trance/trance';
import {HypnosisSuggestion} from './hypnosis-suggestion';
import {HypnosisThing, HypnosisType} from './hypnosis';

/**
 * @indexable
 */
export interface HypnosisFile extends CreativeWork, HypnosisThing {
  /**
   * @keyword
   */
  overviewSrc: string;
  safeties: HypnosisSafetyGuard[];
  suggestions: HypnosisSuggestion[];

  /**
   * @keyword
   */
  goodbyeSrc?: string;

  minimumTranceDepth: TranceDepth;
  preferredTranceDepth: TranceDepth;

  type: HypnosisType.FILE;
}
