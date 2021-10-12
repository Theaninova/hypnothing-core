import {CreativeWork} from '../schema.org';
import {TranceWithIntroductionAndReminder} from '../trance/trance';
import {HypnosisThing, HypnosisType} from '../hypnosis';
import {Reference} from '../util';
import {Aggregatable, Filterable, Keyword, SortableDucet} from '../elasticsearch';

/**
 * @indexable
 */
export interface HypnosisTrigger extends CreativeWork, TranceWithIntroductionAndReminder, HypnosisThing {
  /**
   * For example 'trigger', 'time limited', 'curse', 'permanent'
   */
  triggerType: Aggregatable<Filterable<SortableDucet<Keyword>>>;

  type: HypnosisType<'trigger'>;
}

export type HypnosisTriggerReference = Reference<HypnosisTrigger, 'uuid'>;

/**
 * Hypnosis Trigger type guard
 */
export function isHypnosisTrigger(thing: HypnosisThing): thing is HypnosisTrigger {
  return thing.type === 'trigger';
}
