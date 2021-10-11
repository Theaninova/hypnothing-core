import {AudioOptions, BinauralKeyframe, VolumeKeyframe} from '../audio';

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
  introductionAudioOptions: AudioOptions;

  /**
   * @keyword
   */
  reminderAudioOptions: AudioOptions;
}

export interface TranceWithShortLongAndSummary {
  /**
   * An introduction when the overview is spoken
   */
  overviewIntroductionAudioOptions: AudioOptions;

  /**
   * @keyword
   */
  shortAudioOptions: AudioOptions;

  /**
   * @keyword
   */
  longAudioOptions: AudioOptions;

  /**
   * @keyword
   */
  summaryAudioOptions: AudioOptions;
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
