import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Context from './Context'
import './theme/globalStyle';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Context />, document.getElementById('root'));
registerServiceWorker();
