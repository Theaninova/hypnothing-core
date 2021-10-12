import {CreativeWork} from '../schema.org';
import {TranceDepth, TranceSection} from './trance';
import {HypnosisThing, HypnosisType} from '../hypnosis';
import {AudioReference} from '../audio';
import {Reference} from '../util';

/**
 * @indexable
 */
export interface TranceInduction extends CreativeWork, TranceSection, HypnosisThing {
  audioOptions: AudioReference;
  tranceDepthRating: TranceDepth;

  type: HypnosisType.INDUCTION;
}

export type TranceInductionReference = Reference<TranceInduction, never>;
