export enum Gender {
  Male = 'male',
  Female = 'female',
}

/**
 * @keyword
 * @filterable
 */
export type Uuid = string;

export interface Author {
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
  author: Author;

  /**
   * If there is no speaker given, it is assumed the author is the speaker
   */
  speaker?: Author;

  /**
   * @keyword
   */
  language: string;

  /**
   * If there are any translated works available, they will be listed here.
   */
  translatedWorks: Map<Uuid>;
}
