import {CreativeWork} from '../schema.org';
import {TranceSection, TranceWithShortLongAndSummary} from '../trance/trance';
import {HypnosisThing, HypnosisType} from '../hypnosis';
import {Reference} from '../util';

/**
 * @indexable
 */
export interface HypnosisSuggestion extends CreativeWork, TranceSection, HypnosisThing {
  isRequired: boolean;
  content: TranceWithShortLongAndSummary;

  /**
   * Just short form warnings
   *
   * @text
   */
  warnings: string[];

  /**
   * Just a short form safeties list
   *
   * @text
   */
  safeties: string[];

  type: HypnosisType.SUGGESTION;
}

export type HypnosisSuggestionReference = Reference<HypnosisSuggestion, never>;
