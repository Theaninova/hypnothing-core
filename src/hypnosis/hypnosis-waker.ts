import {CreativeWork, CreativeWorkTranslatableProperties} from '../schema.org';
import {
  HypnosisThing,
  HypnosisThingTranslatableProperties,
  HypnosisType,
  TranslatableThing,
} from '../hypnosis';
import {AudioOptions, ThingWithAudio} from '../audio';
import {KeysOf, Reference} from '../util';

/**
 * @indexable
 */
export interface HypnosisWaker
  extends CreativeWork,
    HypnosisThing,
    ThingWithAudio<[AudioOptions]>,
    TranslatableThing<
      KeysOf<HypnosisWaker, HypnosisThingTranslatableProperties | CreativeWorkTranslatableProperties>
    > {
  type: HypnosisType<'waker'>;
}

export type HypnosisWakerReference = Reference<HypnosisWaker, 'uuid'>;

/**
 * Hypnosis File type guard
 */
export function isHypnosisWaker(thing: HypnosisThing): thing is HypnosisWaker {
  return thing.type === 'waker';
}
