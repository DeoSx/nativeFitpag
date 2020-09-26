import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import rootReduces from './rootReducer';

const middleware = [thunk];

export const store = createStore(
  rootReduces,
  composeWithDevTools(applyMiddleware(...middleware)),
);
