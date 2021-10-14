import {HypnosisThing} from './hypnosis';

export type RecursivePartial<T> = {[P in keyof T]?: RecursivePartial<T[P]>};

export type KeysOf<G extends HypnosisThing, T extends keyof G> = {
  [P in T]: G[P];
};

export type Reference<G extends HypnosisThing, T extends keyof G> = {
  [P in T | 'uuid']: G[P];
};

export interface Map<T> {
  [key: string]: T;
}
