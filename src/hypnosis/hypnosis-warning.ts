import {CreativeWork, CreativeWorkTranslatableProperties} from '../schema.org';
import {
  HypnosisThing,
  HypnosisThingTranslatableProperties,
  HypnosisType,
  TranslatableThing,
} from '../hypnosis';
import {KeysOf, Reference} from '../util';

/**
 * @indexable
 */
export interface HypnosisWarning
  extends CreativeWork,
    HypnosisThing,
    TranslatableThing<
      KeysOf<HypnosisWarning, HypnosisThingTranslatableProperties | CreativeWorkTranslatableProperties>
    > {
  type: HypnosisType<'warning'>;
}

export type HypnosisWarningReference = Reference<HypnosisWarning, 'uuid'>;

/**
 * Hypnosis Warning type guard
 */
export function isHypnosisWarning(thing: HypnosisThing): thing is HypnosisWarning {
  return thing.type === 'warning';
}
