import {AUTHORIZATION, SET_EMAIL, SET_LOGIN, SET_NAME, SET_PHONE_NUMBER} from './user_actions';

export const SET_DEFAULT_CITY = 'SET_DEFAULT_CITY';
export const SET_LANGUAGE = 'SET_LANGUAGE';
export const RESERVATION_NOTIFICATION = 'RESERVATION_NOTIFICATION';
export const NEW_POSITION_NOTIFICATION = 'NEW_POSITION_NOTIFICATION';

export function send_reservation_notification(value) {
    return dispatch => {
        fetch('http://localhost:8080/reservation_notification', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(value)
        }).then(result => {
                if (result.status == 200) {
                    dispatch({
                        type: RESERVATION_NOTIFICATION,
                        payload: !value.flag,
                    });
                } else {
                    dispatch({
                        type: RESERVATION_NOTIFICATION,
                        payload: !value.flag,
                    });
                }
            }
        ).catch(
            dispatch({
                type: RESERVATION_NOTIFICATION,
                payload: !value.flag,
            })
        );
    }
}

export function send_new_reservation_notification(value) {
    return dispatch => {
        fetch('http://localhost:8080/new_reservation_notification', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(value)
        }).then(result => {
                if (result.status == 200) {
                    dispatch({
                        type: NEW_POSITION_NOTIFICATION,
                        payload: !value.flag,
                    });
                } else {
                    dispatch({
                        type: NEW_POSITION_NOTIFICATION,
                        payload: !value.flag,
                    });
                }
            }
        ).catch(
            dispatch({
                type: NEW_POSITION_NOTIFICATION,
                payload: !value.flag,
            })
        );
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
