import React from 'react';

import ResultScreem from './ResultScreen/ResultScreen.js';
import ComputationScreen from './ComputationScreen/ComputationScreen.js';

const screen = props => (
    <section className="screen">
        <ResultScreem result={props.result} />
        <ComputationScreen equation={props.equation} />
    </section>
);

export default screen;