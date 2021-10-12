import {CreativeWork} from '../schema.org';
import {HypnosisThing, HypnosisType} from '../hypnosis';
import {Reference} from '../util';

/**
 * @indexable
 */
export interface HypnosisWarning extends CreativeWork, HypnosisThing {
  type: HypnosisType<'warning'>;
}

export type HypnosisWarningReference = Reference<HypnosisWarning, 'uuid'>;
