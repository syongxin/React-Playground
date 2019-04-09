import { messageReceived, getUsersList } from '../actions/index.js';

const setupSocket = (store, username) => {
    const socket = new WebSocket('ws://localhost:8989');

    socket.onopen = () => {
        // When join chat room, add current user to users list
        socket.send(JSON.stringify({
            type: 'ADD_USER',
            name: username
        }));
    };

    console.log('socket sent username: ' + username);
    socket.onmessage = (event) => {
        const data = JSON.parse(event.data);
        switch (data.type) {
            case 'USERS_LIST':
                store.dispatch(getUsersList(data.users));
                break;
            case 'ADD_MESSAGE':
                console.log(data);
                store.dispatch(messageReceived(data.message, data.sender));
                break;
            default:
                break;
        }
    };


    return socket;
};

export default setupSocket;