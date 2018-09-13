import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {Router, browserHistory} from 'react-router';
import Routes from './routes';

import ErrorBoundary from './ErrorBoundary';

ReactDOM.render(
    <ErrorBoundary render={(error) => <p>Opps!</p>}>
    <Router history={browserHistory} routes={Routes}/>
    </ErrorBoundary>, 
    document.getElementById('root')
    );
    registerServiceWorker();


