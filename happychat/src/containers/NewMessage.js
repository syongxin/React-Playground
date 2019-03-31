import { connect } from "react-redux";
import NewMessageComponent from '../components/NewMessage.js';
import { newMessage } from '../actions/index.js';

const mapDispatchToProps = dispatch => ({
    dispatch: (message, sender) => {
        dispatch(newMessage(message, sender));
    }
});

export const NewMessage = connect(() => ({}), mapDispatchToProps)(NewMessageComponent);