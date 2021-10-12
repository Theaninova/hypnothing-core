import {AudioReference, BinauralKeyframe, VolumeKeyframe} from '../audio';
import {Float, Sortable} from '../elasticsearch';

export interface TranceSection {
  /**
   * Keyframes of where the binaural should start or stop or change in loudness
   */
  binauralKeyframes?: BinauralKeyframe[];
  noiseKeyframes?: VolumeKeyframe[];
}

export interface TranceWithIntroductionAndReminder {
  introductionAudioOptions: AudioReference;

  reminderAudioOptions: AudioReference;
}

export interface TranceWithShortLongAndSummary {
  /**
   * An introduction when the overview is spoken
   */
  overviewIntroductionAudioOptions: AudioReference;

  shortAudioOptions: AudioReference;

  longAudioOptions: AudioReference;

  summaryAudioOptions: AudioReference;
}

/**
 * A depth rating where 0 is awake and +Infinity is infinitely deep.
 *
 * Default should be 1, and of course just an estimate
 */
export type TranceDepth = Sortable<Float>;
