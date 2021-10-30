import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from 'redux-saga';

import { reducer } from "./reducer";
import mainSaga from "../sagas/mainSaga";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, composeEnhancers(
    applyMiddleware(sagaMiddleware),
));

sagaMiddleware.run(mainSaga);

export default store;