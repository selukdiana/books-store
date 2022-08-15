import { legacy_createStore as createStore } from 'redux';
import { rootReducer, cartReducer } from './reducer'
import thunk from 'redux-thunk';
import {applyMiddleware} from 'redux'

export const store = createStore(rootReducer, applyMiddleware(thunk));
