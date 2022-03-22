export type AnimatableValue = number | string | Array<number>;

export interface AnimationObject {
  [key: string]: any;
  callback: AnimationCallback;
  current?: AnimatableValue;
  toValue?: AnimationObject['current'];
  startValue?: AnimationObject['current'];
  finished?: boolean;
  strippedCurrent?: number;
  cancelled?: boolean;

  __prefix?: string;
  __suffix?: string;
  onFrame: (animation: any, timestamp: Timestamp) => boolean;
  onStart: (
    nextAnimation: any,
    current: any,
    timestamp: Timestamp,
    previousAnimation: any
  ) => void;
}

export interface Animation<T extends AnimationObject> extends AnimationObject {
  onFrame: (animation: T, timestamp: Timestamp) => boolean;
  onStart: (
    nextAnimation: T,
    current: T extends NumericAnimation ? number : AnimatableValue,
    timestamp: Timestamp,
    previousAnimation: T
  ) => void;
}

export interface NumericAnimation {
  current?: number;
}
export interface HigherOrderAnimation {
  isHigherOrder?: boolean;
}

export type AnimationCallback = (
  finished?: boolean,
  current?: AnimatableValue
) => void;

export type NextAnimation<T extends AnimationObject> = T | (() => T);

export type Timestamp = number;
