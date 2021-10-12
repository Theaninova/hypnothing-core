import {CreativeWork} from '../schema.org';
import {HypnosisThing, HypnosisType} from '../hypnosis';
import {AudioReference} from '../audio';
import {Reference} from '../util';

/**
 * @indexable
 */
export interface HypnosisWaker extends CreativeWork, HypnosisThing {
  /**
   * @keyword
   */
  audioOptions: AudioReference;

  type: HypnosisType.WAKER;
}

export type HypnosisWakerReference = Reference<HypnosisWaker, never>;
