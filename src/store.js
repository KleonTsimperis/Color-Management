import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import { createLogger } from 'redux-logger';
import { fetchData, amendData, validateInput } from './middleware';
import { loadState } from './localStorage';

const logger = createLogger();
const persistedState = loadState();
const middleware = applyMiddleware(logger, validateInput, fetchData, amendData);

const store = createStore(
    rootReducer,
    persistedState,
    compose(middleware, window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f)
    );

export default store;