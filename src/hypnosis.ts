import {Author, Uuid} from './schema.org';
import {HypnosisFile} from './hypnosis/hypnosis-file';
import {TranceInduction} from './trance/trance-induction';
import {HypnosisSafetyGuard} from './hypnosis/hypnosis-safety';
import {HypnosisSuggestion} from './hypnosis/hypnosis-suggestion';
import {HypnosisTrigger} from './hypnosis/hypnosis-trigger';
import {HypnosisWaker} from './hypnosis/hypnosis-waker';
import {HypnosisWarning} from './hypnosis/hypnosis-warning';

export enum HypnosisType {
  AUTHOR = 'author',
  FILE = 'file',
  INDUCTION = 'induction',
  SAFETY = 'safety',
  SUGGESTION = 'suggestion',
  TRIGGER = 'trigger',
  WAKER = 'waker',
  WARNING = 'warning',
}

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
  : never;

export type HypnosisTypeEnumerator =
  | 'author'
  | 'file'
  | 'induction'
  | 'safety'
  | 'suggestion'
  | 'trigger'
  | 'waker'
  | 'warning';

export interface HypnosisThing {
  /**
   * @keyword
   * @sortable ducet
   * @filterable
   * @aggregatable global
   */
  type: HypnosisType;

  /**
   * @keyword
   * @filterable
   * @aggregatable
   */
  tags?: string[];

  /**
   * @keyword
   * @filterable
   */
  uuid: Uuid;
}
