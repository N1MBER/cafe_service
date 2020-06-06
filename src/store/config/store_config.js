import {applyMiddleware, createStore} from 'redux'
import { rootReducer } from '../reducers/root_reducer'
import thunk from 'redux-thunk'

export const store = createStore(rootReducer, applyMiddleware(thunk));
