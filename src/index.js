import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BasicExample from './Router';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<BasicExample />, document.getElementById('root'));
registerServiceWorker();
