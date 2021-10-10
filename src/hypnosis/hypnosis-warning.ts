import {CreativeWork} from '../schema.org';
import {HypnosisThing, HypnosisType} from '../hypnosis';

/**
 * @indexable
 */
export interface HypnosisWarning extends CreativeWork, HypnosisThing {
  type: HypnosisType.WARNING;
}
