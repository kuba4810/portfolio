import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import '../src/bootstrap/css/bootstrap.css'
import '../src/styles/style.css'
import '../src/styles/animations.css'


ReactDOM.render(<App />, document.getElementById('root'));


serviceWorker.unregister();
