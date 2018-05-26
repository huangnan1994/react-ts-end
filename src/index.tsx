import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import Index from './containers/Index';
import createHistory from 'history/createBrowserHistory'
import {configureStore} from './store';

const history = createHistory();
const store = configureStore(history);

ReactDOM.render(
    <Provider store={store}>
        <Index/>
    </Provider>
    ,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
