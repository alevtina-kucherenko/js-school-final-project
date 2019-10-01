import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import {applyMiddleware, createStore, compose} from 'redux';

const logger = createLogger({});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const createApplicationStore = rootReducer => {
    return createStore(
        rootReducer,
        composeEnhancers(applyMiddleware(
            thunk,
            logger
        ))
    );
};
