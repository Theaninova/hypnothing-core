import {Float, Sortable} from '../elasticsearch';

/**
 * A depth rating where 0 is awake and +Infinity is infinitely deep.
 *
 * Default should be 1, and of course just an estimate
 */
export type TranceDepth = Sortable<Float>;
