import {combineReducers} from 'redux';

import {forms} from './forms';
import {fills} from './fills';
import {activeForm} from './active-form';

export const rootReducer = combineReducers({
    forms,
    fills,
    activeForm
});