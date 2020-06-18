import { combineReducers } from 'redux'
// import { pageReducer } from './page'
// import { userReducer } from './user'
// import { headerReducer} from "./header";
import {style_reducer} from "./style_reducer";
import {tittle_reducer} from './tittle_reducer';

export const rootReducer = combineReducers({
    page: tittle_reducer,
    // user: userReducer,
    // header: headerReducer
});
