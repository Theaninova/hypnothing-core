import {CreativeWork} from '../schema.org';
import {HypnosisThing, HypnosisType} from '../hypnosis';
import {AudioOptions, ThingWithAudio} from '../audio';
import {Reference} from '../util';

/**
 * @indexable
 */
export interface HypnosisWaker extends CreativeWork, HypnosisThing, ThingWithAudio<[AudioOptions]> {
  type: HypnosisType<'waker'>;
}

export type HypnosisWakerReference = Reference<HypnosisWaker, 'uuid'>;

/**
 * Hypnosis File type guard
 */
export function isHypnosisWaker(thing: HypnosisThing): thing is HypnosisWaker {
  return thing.type === 'waker';
}
