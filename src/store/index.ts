import { legacy_createStore as createStore } from 'redux';
import { rootReducer, cartReducer } from './reducer'
import thunk from 'redux-thunk';
import {applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';

// export const store = createStore(rootReducer, applyMiddleware(thunk));

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
