import React from 'react';

const button = props => (
    <button className='btn' onClick={props.onButtonPress}>
        {props.children}
    </button>
);

export default button;
