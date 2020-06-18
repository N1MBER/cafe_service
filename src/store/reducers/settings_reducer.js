import {
    SET_PAGE,
    SET_PAGE_TITTLE
} from '../../actions/tittle_manager';
import StartPage from '../../containers/StartPage';
import {app_values} from '../values/app_values';
import {settings_values} from '../values/settings_values';
import {SET_DEFAULT_CITY, SET_LANGUAGE} from '../../actions/settings_manager';


const  initialState = {
    language: 'English',
    default_city: 'Saint-Petersburg',
    cities: settings_values
};

export function settings_reducer(state = initialState, action) {
    switch (action.type) {
        case SET_DEFAULT_CITY:
            return {...state, default_city: action.payload};
        case  SET_LANGUAGE:
            return {...state, language: action.payload};
        default:
            return state
    }
}
