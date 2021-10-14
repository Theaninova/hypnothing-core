import {Author, Uuid} from './schema.org';
import {HypnosisFile} from './hypnosis/hypnosis-file';
import {TranceInduction} from './trance/trance-induction';
import {HypnosisSafetyGuard} from './hypnosis/hypnosis-safety';
import {HypnosisSuggestion} from './hypnosis/hypnosis-suggestion';
import {HypnosisTrigger} from './hypnosis/hypnosis-trigger';
import {HypnosisWaker} from './hypnosis/hypnosis-waker';
import {HypnosisWarning} from './hypnosis/hypnosis-warning';
import {AudioFile} from './audio';
import {Aggregatable, Filterable, Keyword, KeywordLiteral, SortableDucet} from './elasticsearch';
import {RecursivePartial} from './util';

export type SpecificHypnosisType<T> = T extends 'author'
  ? Author
  : T extends 'file'
  ? HypnosisFile
  : T extends 'induction'
  ? TranceInduction
  : T extends 'safety'
  ? HypnosisSafetyGuard
  : T extends 'suggestion'
  ? HypnosisSuggestion
  : T extends 'trigger'
  ? HypnosisTrigger
  : T extends 'waker'
  ? HypnosisWaker
  : T extends 'warning'
  ? HypnosisWarning
  : T extends 'audio file'
  ? AudioFile
  : never;

export type HypnosisType<T extends HypnosisTypeEnumerator> = Aggregatable<
  Filterable<SortableDucet<KeywordLiteral<T>>>
>;

export type HypnosisTypeEnumerator =
  | 'author'
  | 'file'
  | 'induction'
  | 'safety'
  | 'suggestion'
  | 'trigger'
  | 'waker'
  | 'warning'
  | 'audio file'
  | string; // for translations

export interface HypnosisThing {
  type: HypnosisType<HypnosisTypeEnumerator>;

  tags?: Aggregatable<Filterable<Keyword>>[];

  uuid: Uuid;
}

export type HypnosisThingTranslatableProperties = 'type' | 'tags';

export interface TranslatableThing<T extends Record<string, unknown>> {
  translations: Record<string, RecursivePartial<T>>;
}
