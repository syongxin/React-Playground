import React from 'react';
import PropTypes from 'prop-types';
import Message from './Message.js';

const MessageList = ({ messages }) => {
    return (
        <section id='messages-list'>
            <ul>
                {messages.map(msg => (
                    <Message  key={msg.id} {...msg} />
                ))}
            </ul>
        </section>
    )
};

MessageList.propTypes = {
    messages: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            message: PropTypes.string.isRequired,
            sender: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
};

export default MessageList;