import { combineReducers } from 'redux-immutable';
import { createStore } from 'redux';
import globalReducers from '@americanexpress/one-app-ducks';

const appReducer = combineReducers({
    ...globalReducers,
    ...otherReducers, // Your specific reducers
});

const store = createStore(
    appReducer
);
