import React from 'react';

import ResultScreem from './ResultScreen/ResultScreen.js';
import ComputationScreen from './ComputationScreen/ComputationScreen.js';

const screen = () => (
    <section className="screen">
        <ResultScreem/>
        <ComputationScreen/>
    </section>
);

export default screen;