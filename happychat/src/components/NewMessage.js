import React from 'react';
import PropTypes from 'prop-types';



const  NewMessage = props => {
    let input;

    return (
        <section id='new-message'>
            <input type="text" id='message-input' onKeyPress={(e) => {
                if (e.key === 'Enter') {

                    props.dispatch(input.value, 'Me');
                    input.value = '';
                }
            }}
            ref={(node) => {
                input = node;
            }}
            />
        </section>
    )
};

NewMessage.propTypes = {
    dispatch: PropTypes.func.isRequired
};

export default NewMessage;