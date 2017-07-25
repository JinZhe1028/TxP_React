import { isEmpty, isNil, merge, is } from 'ramda';

export const createStateAction = (name) => `STATE_${name}`;

export const effects = ['REQUEST', 'FAILURE', 'SUCCESS'];

export const withEffects = (name, eff = effects) =>
  eff.reduce((acc, e) => Object.assign({}, acc, { [e]: (...args) => args }), {});

export const compact = (object) => Object.keys(object).reduce((acc, key) => {
  const value = object[key];
  const mergeIfNotEmpty = (v) => ((isEmpty(v) || isNil(v)) ? acc : merge(acc, { [key]: v }));

  if (is(Object, value)) {
    return mergeIfNotEmpty(compact(value));
  }

  return mergeIfNotEmpty(value);
}, {});
