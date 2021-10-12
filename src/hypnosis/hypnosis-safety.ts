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
