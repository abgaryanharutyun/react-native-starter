import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';
import appState from '../reducers';
import rootSaga from '../sagas';

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middleware = [sagaMiddleware];

  const store = createStore(
    appState,
    applyMiddleware(...middleware),
  );

  sagaMiddleware.run(rootSaga);

  return store;
};

export default configureStore();