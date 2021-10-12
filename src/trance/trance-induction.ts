import {CreativeWork} from '../schema.org';
import {TranceDepth, TranceSection} from './trance';
import {HypnosisThing, HypnosisType} from '../hypnosis';
import {AudioOptions} from '../audio';
import {Reference} from '../util';

/**
 * @indexable
 */
export interface TranceInduction extends CreativeWork, TranceSection, HypnosisThing {
  audioOptions: AudioOptions;
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
