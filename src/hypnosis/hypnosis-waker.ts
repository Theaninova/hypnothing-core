import {CreativeWork} from '../schema.org';
import {HypnosisType} from '../hypnosis';

/**
 * @indexable
 */
export interface HypnosisWaker extends CreativeWork {
  /**
   * @keyword
   */
  src: string;

  type: HypnosisType.WAKER;
}
