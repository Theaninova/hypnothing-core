import {HypnosisThing, HypnosisType} from './hypnosis';
import {Reference} from './util';
import {Aggregatable, Filterable, Keyword, SortableDucet, Text} from './elasticsearch';

export type Uuid = Filterable<Keyword>;

/**
 * @indexable
 */
export interface Author extends HypnosisThing {
  gender: Aggregatable<Filterable<Keyword>>;

  givenName: Aggregatable<Filterable<Keyword>>;

  familyName: Aggregatable<Filterable<Keyword>>;

  additionalName: Aggregatable<Filterable<Keyword>>;

  type: HypnosisType<'author'>;
}

export type AuthorReference = Reference<Author, 'uuid'>;

/**
 * Hypnosis File type guard
 */
export function isAuthor(thing: HypnosisThing): thing is Author {
  return thing.type === 'author';
}

export interface CreativeWork {
  title: SortableDucet<Keyword>;

  description: Text;

  /**
   * The author of the work (usually the writer)
   */
  author: Reference<Author, 'uuid'>;

  /**
   * If there are any alternate versions (say with different intensities)
   */
  alternatives?: Uuid[];
}
