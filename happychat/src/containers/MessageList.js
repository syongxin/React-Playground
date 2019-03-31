import { connect } from "react-redux";
import MessageListComponent from '../components/MessageList.js';

export const MessageList = connect(state => ({
    messages: state.messages
}), {})(MessageListComponent);