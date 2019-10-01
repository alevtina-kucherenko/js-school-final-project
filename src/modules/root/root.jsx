import React from 'react';
import {Provider} from 'react-redux';
import {Router, Route} from 'react-router-dom';

import {Home, Create, Users, View, Fill, Edit} from '../../pages';
import {createApplicationStore} from '../../utils/create-store';
import {history} from '../../utils/history';

import './root.css';
import {rootReducer} from '../../reducers';

const store = createApplicationStore(rootReducer);

export const Root = () => {
    return (
        <Provider store={store}>
            <Router history={history}>
                <Route path="/" exact component={Home}/>
                <Route path="/users/:formId" component={Users}/>
                <Route path="/view/:formId/:userId" component={View}/>
                <Route path="/create/" component={Create}/>
                <Route path="/edit/:formId" component={Edit}/>
                <Route path="/fill/:formId" component={Fill}/>
            </Router>
        </Provider>
    );
};
