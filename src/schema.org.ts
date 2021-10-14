import {
  HypnosisThing,
  HypnosisThingTranslatableProperties,
  HypnosisType,
  TranslatableThing,
} from './hypnosis';
import {KeysOf, Reference} from './util';
import {Aggregatable, Filterable, Keyword, SortableDucet, Text} from './elasticsearch';

export type Uuid = Filterable<Keyword>;

/**
 * @indexable
 */
export interface Author
  extends HypnosisThing,
    TranslatableThing<
      KeysOf<
        Author,
        HypnosisThingTranslatableProperties | 'gender' | 'givenName' | 'familyName' | 'additionalName'
      >
    > {
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

export type CreativeWorkTranslatableProperties = 'title' | 'description';

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
