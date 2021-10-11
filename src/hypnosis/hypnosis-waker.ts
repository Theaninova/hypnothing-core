import {CreativeWork} from '../schema.org';
import {HypnosisThing, HypnosisType} from '../hypnosis';
import {AudioOptions} from "../audio";

/**
 * @indexable
 */
export interface HypnosisWaker extends CreativeWork, HypnosisThing {
  /**
   * @keyword
   */
  audioOptions: AudioOptions;

  type: HypnosisType.WAKER;
}
