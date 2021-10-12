import {CreativeWork} from '../schema.org';
import {TranceSection, TranceWithShortLongAndSummary} from '../trance/trance';
import {HypnosisThing, HypnosisType} from '../hypnosis';
import {Reference} from '../util';
import {Text} from '../elasticsearch';

/**
 * @indexable
 */
export interface HypnosisSuggestion extends CreativeWork, TranceSection, HypnosisThing {
  isRequired: boolean;
  content: TranceWithShortLongAndSummary;

  /**
   * Just short form warnings
   */
  warnings: Text[];

  /**
   * Just a short form safeties list
   */
  safeties: Text[];

  type: HypnosisType<'suggestion'>;
}

export type HypnosisSuggestionReference = Reference<HypnosisSuggestion, 'uuid'>;
