import * as types from '../constants/ActionTypes.js';

let nextMessageId = 0;
const nextUserId = 0;

export const getUsersList = users => ({
    type: types.USERS_LIST,
    users
});

export const newMessage = (message, sender) => ({
    type: types.ADD_MESSAGE,
    id: nextMessageId++,
    message,
    sender
});

export const messageReceived = (message, sender) => ({
    type: types.MESSAGE_RECEIVED,
    id: nextMessageId++,
    message,
    sender
});