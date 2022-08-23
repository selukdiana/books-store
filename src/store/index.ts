import { legacy_createStore as createStore } from 'redux';
import { rootReducer} from './reducers/rootReducer'
import thunk from 'redux-thunk';
import {applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
