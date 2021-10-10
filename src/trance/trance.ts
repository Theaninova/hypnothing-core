import {BinauralKeyframe, VolumeKeyframe} from '../audio';

export interface TranceSection {
  /**
   * Keyframes of where the binaural should start or stop or change in loudness
   */
  binauralKeyframes?: BinauralKeyframe[];
  noiseKeyframes?: VolumeKeyframe[];
}

export interface TranceWithIntroductionAndReminder {
  /**
   * @keyword
   */
  introductionSrc: string;

  /**
   * @keyword
   */
  reminderSrc: string;
}

export interface TranceWithShortLongAndSummary {
  /**
   * An introduction when the overview is spoken
   */
  overviewIntroductionSrc: string;

  /**
   * @keyword
   */
  shortSrc: string;

  /**
   * @keyword
   */
  longSrc: string;

  /**
   * @keyword
   */
  summarySrc: string;
}

/**
 * A depth rating where 0 is awake and +Infinity is infinitely deep.
 *
 * Default should be 1, and of course just an estimate
 *
 * @float
 * @sortable
 */
export type TranceDepth = number;
