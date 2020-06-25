import {
    SET_PAGE,
    SET_PAGE_TITTLE, SET_PREVIOUS_PAGE,
} from '../../actions/tittle_manager';
import StartPage from '../../containers/StartPage';
import {app_values} from '../values/app_values';
import {english_language} from '../values/Localization/english_language';


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
        default:
            return state
    }
}
