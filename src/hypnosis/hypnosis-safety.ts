import {CreativeWork, CreativeWorkTranslatableProperties} from '../schema.org';
import {
  HypnosisThing,
  HypnosisThingTranslatableProperties,
  HypnosisType,
  TranslatableThing,
} from '../hypnosis';
import {KeysOf, Reference} from '../util';
import {AudioOptions, ThingWithAudio} from '../audio';

/**
 * @indexable
 */
export interface HypnosisSafetyGuard
  extends CreativeWork,
    ThingWithAudio<[AudioOptions, AudioOptions]>,
    HypnosisThing,
    TranslatableThing<
      KeysOf<HypnosisSafetyGuard, HypnosisThingTranslatableProperties | CreativeWorkTranslatableProperties>
    > {
  canBeDisabled: boolean;

  type: HypnosisType<'safety'>;
}

export type HypnosisSafetyGuardReference = Reference<HypnosisSafetyGuard, 'uuid'>;

/**
 * Hypnosis File type guard
 */
export function isHypnosisSafetyGuard(thing: HypnosisThing): thing is HypnosisSafetyGuard {
  return thing.type === 'safety';
}
