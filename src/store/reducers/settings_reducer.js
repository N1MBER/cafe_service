import {
    SET_PAGE,
    SET_PAGE_TITTLE
} from '../../actions/tittle_manager';
import StartPage from '../../containers/StartPage';
import {app_values} from '../values/app_values';
import {settings_values} from '../values/settings_values';
import {
    NEW_POSITION_NOTIFICATION,
    RESERVATION_NOTIFICATION,
    SET_DEFAULT_CITY,
    SET_LANGUAGE,
} from '../../actions/settings_manager';
import {russian_language} from '../values/Localization/russian_language';
import {english_language} from '../values/Localization/english_language';

export const languages = [russian_language, english_language]


const  initialState = {
    language: 'English',
    default_city: null,
    cities: settings_values,
    reservation_notification: true,
    new_position_notification: true
};

export function settings_reducer(state = initialState, action) {
    switch (action.type) {
        case SET_DEFAULT_CITY:
            return {...state, default_city: action.payload};
        case  SET_LANGUAGE:
            return {...state, language: action.payload};
        case RESERVATION_NOTIFICATION:
            return {...state, reservation_notification: action.payload}
        case NEW_POSITION_NOTIFICATION:
            return {...state, new_position_notification: action.payload}
        default:
            return state
    }
}
