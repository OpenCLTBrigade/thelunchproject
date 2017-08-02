import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import { BrowserRouter as Router } from 'react-router-dom';
//TODO: add this back in later. Let's not deal with service workers right now.
//import registerServiceWorker from './util/registerServiceWorker';

ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));

//TODO: add this back in later. Let's not deal with service workers right now.
//registerServiceWorker();
