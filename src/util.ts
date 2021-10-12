import {HypnosisThing} from './hypnosis';

export type RecursivePartial<T> = {[P in keyof T]?: RecursivePartial<T[P]>};

export type Reference<G extends HypnosisThing, T extends keyof G> = {
  [P in T | 'uuid']: RecursivePartial<G[P]>;
};

export interface Map<T> {
  [key: string]: T;
}
