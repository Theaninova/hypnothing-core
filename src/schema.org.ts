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
}
