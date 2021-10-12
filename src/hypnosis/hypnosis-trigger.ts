import {CreativeWork} from '../schema.org';
import {TranceWithIntroductionAndReminder} from '../trance/trance';
import {HypnosisThing, HypnosisType} from '../hypnosis';
import {Reference} from '../util';

/**
 * @indexable
 */
export interface HypnosisTrigger extends CreativeWork, TranceWithIntroductionAndReminder, HypnosisThing {
  /**
   * For example 'trigger', 'time limited', 'curse', 'permanent'
   *
   * @keyword
   * @filterable
   * @sortable ducet
   * @aggregatable
   */
  triggerType: string;

  type: HypnosisType.TRIGGER;
}

export type HypnosisTriggerReference = Reference<HypnosisTrigger, never>;
