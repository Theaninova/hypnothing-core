import {CreativeWork} from '../schema.org';
import {HypnosisThing, HypnosisType} from '../hypnosis';
import {Reference} from '../util';
import {Text} from '../elasticsearch';
import {AudioOptions, ThingWithAudio} from '../audio';

/**
 * @indexable
 */
export interface HypnosisSuggestion
  extends CreativeWork,
    HypnosisThing,
    ThingWithAudio<[AudioOptions, AudioOptions, AudioOptions, AudioOptions]> {
  isRequired: boolean;

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

/**
 * Hypnosis Suggestion type guard
 */
export function isHypnosisSuggestion(thing: HypnosisThing): thing is HypnosisSuggestion {
  return thing.type === 'suggestion';
}
