import {CreativeWork, CreativeWorkTranslatableProperties} from '../schema.org';
import {TranceDepth} from './trance';
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
export interface TranceInduction
  extends CreativeWork,
    ThingWithAudio<[AudioOptions]>,
    HypnosisThing,
    TranslatableThing<
      KeysOf<TranceInduction, HypnosisThingTranslatableProperties | CreativeWorkTranslatableProperties>
    > {
  tranceDepthRating: TranceDepth;

  type: HypnosisType<'induction'>;
}

export type TranceInductionReference = Reference<TranceInduction, 'uuid'>;

/**
 * Hypnosis File type guard
 */
export function isTranceInduction(thing: HypnosisThing): thing is TranceInduction {
  return thing.type === 'induction';
}
