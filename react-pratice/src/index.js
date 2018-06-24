import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import StateButton from './stateANDbutton/stateANDbutton.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<StateButton />, document.getElementById('right'));
registerServiceWorker();
