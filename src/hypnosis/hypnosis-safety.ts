import {CreativeWork} from '../schema.org';
import {TranceWithIntroductionAndReminder} from '../trance/trance';
import {HypnosisThing, HypnosisType} from '../hypnosis';

/**
 * @indexable
 */
export interface HypnosisSafetyGuard extends CreativeWork, TranceWithIntroductionAndReminder, HypnosisThing {
  canBeDisabled: boolean;

  type: HypnosisType.SAFETY;
}
