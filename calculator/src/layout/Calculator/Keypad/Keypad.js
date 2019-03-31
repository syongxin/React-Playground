import React from 'react';

import KeypadRow from './KeypadRow/KeypadRow.js';
import Button from '../../../components/Button/Button.js';

const keypad = props => (
    <section className='keypad'>
        <KeypadRow>
            <Button onButtonPress={props.onButtonPress}>C</Button>
            <Button onButtonPress={props.onButtonPress}>&larr;</Button>
            <Button onButtonPress={props.onButtonPress}>%</Button>
            <Button onButtonPress={props.onButtonPress}>/</Button>
        </KeypadRow>

        <KeypadRow>
            <Button onButtonPress={props.onButtonPress}>7</Button>
            <Button onButtonPress={props.onButtonPress}>8</Button>
            <Button onButtonPress={props.onButtonPress}>9</Button>
            <Button onButtonPress={props.onButtonPress}>*</Button>
        </KeypadRow>

        <KeypadRow>
            <Button onButtonPress={props.onButtonPress}>4</Button>
            <Button onButtonPress={props.onButtonPress}>5</Button>
            <Button onButtonPress={props.onButtonPress}>6</Button>
            <Button onButtonPress={props.onButtonPress}>-</Button>
        </KeypadRow>

        <KeypadRow>
            <Button onButtonPress={props.onButtonPress}>1</Button>
            <Button onButtonPress={props.onButtonPress}>2</Button>
            <Button onButtonPress={props.onButtonPress}>3</Button>
            <Button onButtonPress={props.onButtonPress}>+</Button>
        </KeypadRow>

        <KeypadRow>
            <Button onButtonPress={props.onButtonPress}>&plusmn;</Button>
            <Button onButtonPress={props.onButtonPress}>0</Button>
            <Button onButtonPress={props.onButtonPress}>.</Button>
            <Button onButtonPress={props.onButtonPress}>=</Button>
        </KeypadRow>
    </section>
);

export default keypad;