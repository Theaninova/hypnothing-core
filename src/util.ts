import {Uuid} from './schema.org';

export type RecursivePartial<T> = {[P in keyof T]?: RecursivePartial<T[P]>};

export interface Reference<G, T extends RecursivePartial<G> | undefined> {
  cache: T;
  reference: Uuid;
}

export interface Map<T> {
  [key: string]: T;
}
