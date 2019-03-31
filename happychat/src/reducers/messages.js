import * as types from '../constants/ActionTypes'

const messages = (state = [], action) => {
    switch (action.type) {
        case types.ADD_MESSAGE:
        case types.MESSAGE_RECEIVED:
            return state.concat([
                {
                    message: action.message,
                    sender: action.sender,
                    id: action.id
                }
            ]);
        default:
            return state
    }
};

export default messages;