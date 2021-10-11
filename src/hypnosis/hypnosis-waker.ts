import {CreativeWork} from '../schema.org';
import {HypnosisThing, HypnosisType} from '../hypnosis';

/**
 * @indexable
 */
export interface HypnosisWaker extends CreativeWork, HypnosisThing {
  /**
   * @keyword
   */
  src: string;

  type: HypnosisType.WAKER;
}
