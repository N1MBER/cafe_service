import axios from 'axios';

export const SET_LOGIN = 'SET_LOGIN';
export const SET_PHONE_NUMBER = 'SET_PHONE_NUMBER';
export const SET_EMAIL = 'SET_EMAIL';
export const SET_AUTHORIZATION = 'SET_AUTHORIZATION';
export const SET_NAME = 'SET_NAME';
export const SET_RESERVATION_DATE = 'SET_RESERVATION_DATE';
export const SET_RESERVATION_TIME = 'SET_RESERVATION_TIME';
export const SET_RESERVATION_PLACE = 'SET_RESERVATION_PLACE';
export const SET_RESERVATION_CITY = 'SET_RESERVATION_CITY';
export const SET_RESERVATION ='SET_RESERVATION';
export const SET_RESERVATION_NAME = 'SET_RESERVATION_NAME';
export const SET_RESERVATION_PHONE_NUMBER = 'SET_RESERVATION_PHONE_NUMBER';
export const SET_WISHES = 'SET_WISHES';

export function login(butch) {
    return dispatch => {
        let header = 'Basic ' + btoa(butch.username + ':' + butch.password);
        axios({
            url: 'http://localhost:8080/login',
            method: 'post',
            headers: {
                Authorization: header
            },
        })
            .then(result => {
                console.log(result);
                if (result.status == 200) {
                    localStorage.setItem("loginIn", header);
                } else {

                }
            })
            .catch(result => {
                console.log(result);
            });
    }
}

export function set_login(login) {
    return{
        type: SET_LOGIN,
        payload: login
    }
}

export function set_wishes(wishes) {
    return{
        type: SET_WISHES,
        payload: wishes
    }
}


export function set_reservation_phone_number(number) {
    return{
        type: SET_RESERVATION_PHONE_NUMBER,
        payload: number
    }
}

export function set_reservation_name(name) {
    return{
        type: SET_RESERVATION_NAME,
        payload: name
    }
}

export function set_reservation_city(city) {
    return{
        type: SET_RESERVATION_CITY,
        payload: city
    }
}

export function set_reservation_place(place) {
    return{
        type: SET_RESERVATION_PLACE,
        payload: place
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

export function set_reservation(flag) {
    return{
        type: SET_RESERVATION,
        payload: flag
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
