import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Home';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
