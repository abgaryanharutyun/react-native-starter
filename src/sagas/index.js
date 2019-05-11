import { all, fork } from 'redux-saga/effects';
import * as first from './first';

const combinedSagas = {
  ...first
};

export default function* rootSaga() {
  yield all(Object.values(combinedSagas).map(fork));
}