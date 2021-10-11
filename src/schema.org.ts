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

  /**
   * The author of the work (usually the writer)
   */
  author: Uuid;

  /**
   * If there are any alternate versions (say with different intensities)
   */
  alternatives?: Uuid[];
}
