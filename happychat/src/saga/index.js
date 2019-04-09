import { takeEvery, all } from 'redux-saga/effects';
import * as types from '../constants/ActionTypes.js';

const handleNewUser = function* handleNewUser(params) {
    yield takeEvery(types.ADD_USER, (action => {
        console.log('ADD_USER effect: action ' + action + ', params ' + params);
    }))
};

const handleNewMessage = function* handleNewMessage(params) {
    yield takeEvery(types.ADD_MESSAGE, (action) => {
        action.sender = params.username;
        params.socket.send(JSON.stringify(action))
    })
};

export default function* rootSaga(params) {
    yield all([
        handleNewUser(params),
        handleNewMessage(params)
    ])
};