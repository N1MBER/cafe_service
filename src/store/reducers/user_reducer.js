import {
    SET_AUTHORIZATION,
    SET_EMAIL,
    SET_LOGIN,
    SET_PHONE_NUMBER,
    SET_NAME,
    SET_RESERVATION_TIME,
    SET_RESERVATION_DATE,
} from '../../actions/user_actions';


const  initialState = {
    login: null,
    authorized: false,
    phone_number: null,
    email: null,
    name: null,
    reservation_date: null,
    reservation_time: null
};

export function user_reducer(state = initialState, action) {
    switch (action.type) {
        case SET_NAME:
            return {...state, name: action.payload};
        case SET_LOGIN:
            return {...state, login: action.payload};
        case SET_EMAIL:
            return {...state, email: action.payload};
        case SET_PHONE_NUMBER:
            return {...state, phone_number: action.payload};
        case SET_AUTHORIZATION:
            return {...state, authorized: action.payload};
        case SET_RESERVATION_DATE:
            return {...state, reservation_date: action.payload};
        case SET_RESERVATION_TIME:
            return {...state, reservation_time: action.payload};
        default:
            return state;
    }
}
