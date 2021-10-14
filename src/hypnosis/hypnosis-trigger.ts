import {CreativeWork, CreativeWorkTranslatableProperties} from '../schema.org';
import {
  HypnosisThing,
  HypnosisThingTranslatableProperties,
  HypnosisType,
  TranslatableThing,
} from '../hypnosis';
import {KeysOf, Reference} from '../util';
import {Aggregatable, Filterable, Keyword, SortableDucet} from '../elasticsearch';
import {AudioOptions, ThingWithAudio} from '../audio';

/**
 * @indexable
 */
export interface HypnosisTrigger
  extends CreativeWork,
    ThingWithAudio<[AudioOptions, AudioOptions]>,
    HypnosisThing,
    TranslatableThing<
      KeysOf<
        HypnosisTrigger,
        HypnosisThingTranslatableProperties | CreativeWorkTranslatableProperties | 'triggerType'
      >
    > {
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
