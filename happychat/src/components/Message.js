import React from 'react';
import PropTypes from 'prop-types';

const Message = ({message, sender}) => (

        <p>
            <i>{sender}</i>: {message}
        </p>
);

Message.propTypes = {
    message: PropTypes.string.isRequired,
    sender: PropTypes.string.isRequired
};


export default Message;