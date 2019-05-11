export const REQUEST = 'REQUEST';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';
export const ALL = 'all';

export const getResponseKey = (key = ALL) => key;

// creates request types for `base` action
export const createRequestTypes = base => [REQUEST, SUCCESS, FAILURE].reduce(
  (acc, type) => {
    acc[type] = `${base}_${type}`;
    return acc;
  }, {},
);

export const action = (type, payload = {}) => ({ type, ...payload });