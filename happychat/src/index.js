import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import username from './utils/random-name.js';

import App from './App';
import Reducers from './reducers';
import rootSaga from './saga/index.js';
import setupSocket from './sockets/index.js';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    Reducers,
    applyMiddleware(sagaMiddleware));


const socket = setupSocket(store, username);

sagaMiddleware.run(rootSaga, { socket, username });

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
