import {Uuid} from '../schema.org';

export enum HypnosisType {
  FILE = 'file',
  INDUCTION = 'induction',
  SAFETY = 'safety',
  WARNING = 'warning',
  SUGGESTION = 'suggestion',
  TRIGGER = 'trigger',
  WAKER = 'waker',
  AUTHOR = 'author',
}

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
