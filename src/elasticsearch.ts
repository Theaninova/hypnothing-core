export type Primitive = string | number;

/**
 * @filterable
 */
export type Filterable<T extends Primitive> = T;

/**
 * @sortable ducet
 */
export type SortableDucet<T extends string> = T;

/**
 * @sortable
 */
export type Sortable<T extends number> = T;

/**
 * @aggregatable
 */
export type Aggregatable<T extends Primitive> = T;

/**
 * @keyword
 */
export type Keyword = string;

/**
 * @text
 */
export type Text = string;

/**
 * @integer
 */
export type Int = number;

/**
 * @float
 */
export type Float = number;

/**
 * @keyword
 */
export type KeywordLiteral<T extends string> = T;
