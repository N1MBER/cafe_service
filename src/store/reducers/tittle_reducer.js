import {
    SET_PAGE,
    SET_PAGE_TITTLE
} from '../../actions/tittle_manager';
import StartPage from '../../containers/StartPage';
import {app_values} from '../values/app_values';


const  initialState = {
    header_name: app_values.header.tittle.cafe,
    page: StartPage,
    values: app_values
};

export function tittle_reducer(state = initialState, action) {
    switch (action.type) {
        case SET_PAGE_TITTLE:
            return {...state, header_name: action.payload};
        case  SET_PAGE:
            return {...state, page: action.payload};
        default:
            return state
    }
}
