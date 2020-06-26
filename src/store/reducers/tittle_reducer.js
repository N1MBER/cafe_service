import {
    SET_PAGE,
    SET_PAGE_TITTLE,
    SET_PREVIOUS_PAGE,
} from '../../actions/tittle_manager';
import StartPage from '../../containers/StartPage';
import {app_values} from '../values/app_values';
import {english_language} from '../values/Localization/english_language';
import {SET_LANGUAGE} from '../../actions/settings_manager';
import {LANGUAGES} from '../values/settings_values';


const  initialState = {
    header_name: app_values.header.tittle.cafe,
    page: StartPage,
    previous_page: StartPage,
    values: english_language
};

export function tittle_reducer(state = initialState, action) {
    switch (action.type) {
        case SET_PAGE_TITTLE:
            return {...state, header_name: action.payload};
        case  SET_PAGE:
            return {...state, page: action.payload};
        case  SET_PREVIOUS_PAGE:
            return {...state, previous_page: action.payload};
        case  SET_LANGUAGE:
            switch (action.payload) {
                case LANGUAGES[0][0]:
                    return {...state, values: LANGUAGES[1][0]};
                case LANGUAGES[0][1]:
                    return {...state, values: LANGUAGES[1][1]};
                case LANGUAGES[0][2]:
                    return {...state, values: LANGUAGES[1][2]};
                case LANGUAGES[0][3]:
                    return {...state, values: LANGUAGES[1][3]};
                default:
                    return {...state, values: english_language};
            }
            break;
        default:
            return state
    }
}
