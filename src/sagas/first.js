import { AAA } from "../actions/first";
import {
  takeLatest,
} from 'redux-saga/effects';

function* loadAcuity() {
  console.warn('from saga');
}


export function* watchAcuity() {
  yield takeLatest(AAA, loadAcuity);
}
