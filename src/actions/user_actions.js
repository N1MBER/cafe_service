export const SET_LOGIN = 'SET_LOGIN';
export const SET_PHONE_NUMBER = 'SET_PHONE_NUMBER';
export const SET_EMAIL = 'SET_EMAIL';
export const SET_AUTHORIZATION = 'SET_AUTHORIZATION';
export const SET_NAME = 'SET_NAME';
export const SET_RESERVATION_DATE = 'SET_RESERVATION_DATE';
export const SET_RESERVATION_TIME = 'SET_RESERVATION_TIME';

export function set_login(login) {
    return{
        type: SET_LOGIN,
        payload: login
    }
}

export function set_reservation_date(date) {
    return{
        type: SET_RESERVATION_DATE,
        payload: date
    }
}

export function set_reservation_time(time) {
    return{
        type: SET_RESERVATION_TIME,
        payload: time
    }
}

export function set_phone_number(number) {
    return{
        type: SET_PHONE_NUMBER,
        payload: number
    }
}

export function set_email(email) {
    return{
        type: SET_EMAIL,
        payload: email
    }
}

export function set_authorization(auth) {
    return{
        type: SET_AUTHORIZATION,
        payload: auth
    }
}

export function set_name(name) {
    return{
        type: SET_NAME,
        payload: name
    }
}
