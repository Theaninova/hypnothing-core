import {HypnosisThing, HypnosisType} from './hypnosis';

export enum Gender {
  Male = 'male',
  Female = 'female',
}

/**
 * @keyword
 * @filterable
 */
export type Uuid = string;

/**
 * @indexable
 */
export interface Author extends HypnosisThing {
  /**
   * @keyword
   * @filterable
   * @aggregatable
   */
  gender: string | Gender;

  /**
   * @keyword
   * @filterable
   * @aggregatable
   */
  givenName: string;

  /**
   * @keyword
   * @filterable
   * @aggregatable
   */
  familyName: string;

  /**
   * @keyword
   * @filterable
   * @aggregatable
   */
  additionalName: string;

  type: HypnosisType.AUTHOR;
  tags: undefined;
}

export interface Map<T> {
  [key: string]: T;
}

export interface CreativeWork {
  /**
   * @keyword
   * @sortable
   */
  title: string;

  /**
   * @text
   */
  description: string;
  author: Uuid;

  /**
   * If there is no speaker given, it is assumed the author is the speaker
   */
  speaker?: Uuid;

  /**
   * @keyword
   */
  language: string;

  /**
   * If there are any translated works available, they will be listed here.
   *
   * LANG_CODE -> FILE_UUID
   */
  translatedWorks: Map<Uuid>;

  /**
   * SpeakerUUID -> FileUUID
   */
  alternatives?: Map<Uuid>;
}
