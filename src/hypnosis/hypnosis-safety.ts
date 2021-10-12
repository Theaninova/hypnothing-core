import {CreativeWork} from '../schema.org';
import {TranceWithIntroductionAndReminder} from '../trance/trance';
import {HypnosisThing, HypnosisType} from '../hypnosis';
import {Reference} from '../util';

/**
 * @indexable
 */
export interface HypnosisSafetyGuard extends CreativeWork, TranceWithIntroductionAndReminder, HypnosisThing {
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
