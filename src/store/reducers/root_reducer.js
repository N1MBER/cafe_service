import { combineReducers } from 'redux';
import {tittle_reducer} from './tittle_reducer';
import {settings_reducer} from './settings_reducer';
import {user_reducer} from './user_reducer';

export const rootReducer = combineReducers({
    page: tittle_reducer,
    settings: settings_reducer,
    user: user_reducer,
});
