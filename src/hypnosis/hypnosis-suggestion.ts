import {CreativeWork, Uuid} from '../schema.org';
import {TranceSection, TranceWithShortLongAndSummary} from '../trance/trance';
import {HypnosisThing, HypnosisType} from './hypnosis';

/**
 * @indexable
 */
export interface HypnosisSuggestion extends CreativeWork, TranceSection, HypnosisThing {
  isRequired: boolean;
  content?: TranceWithShortLongAndSummary;
  alternatives?: Uuid[];

  type: HypnosisType.SUGGESTION;
}
