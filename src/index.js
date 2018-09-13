import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
<<<<<<< HEAD
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


=======
import {Router, browserHistory} from 'react-router'
import Routes from './routes'

ReactDOM.render(
    <Router
        history={browserHistory}
        routes={Routes}
        />
    , document.getElementById('root'));
registerServiceWorker();
>>>>>>> 08e26a1a0521b34f00f6dbdb126f0e25c12fae19
