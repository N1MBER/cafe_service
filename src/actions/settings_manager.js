export const SET_DEFAULT_CITY = 'SET_DEFAULT_CITY';
export const SET_LANGUAGE = 'SET_LANGUAGE';
export const RESERVATION_NOTIFICATION = 'RESERVATION_NOTIFICATION';
export const NEW_POSITION_NOTIFICATION = 'NEW_POSITION_NOTIFICATION';

export function set_reservation_notification(value) {
    return{
        type: RESERVATION_NOTIFICATION,
        payload: value
    }
}

export function set_new_position_notification(value) {
    return{
        type: NEW_POSITION_NOTIFICATION,
        payload: value
    }
}

export function set_default_city(city) {
    return{
        type: SET_DEFAULT_CITY,
        payload: city
    }
}

export function set_language(language) {
    return{
        type: SET_LANGUAGE,
        payload: language
    }
}
