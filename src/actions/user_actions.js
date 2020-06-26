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
export const AUTHORIZATION = 'AUTHORIZATION';

export function authorization(user_info) {
    return dispatch => {
        fetch('http://localhost:8080/authorization',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user_info)
        }).then(result => {
                if (result.status == 200) {
                    dispatch({
                        type: AUTHORIZATION,
                        payload: true,
                    });
                    dispatch({
                        type: SET_LOGIN,
                        payload: user_info.login,
                    });
                    dispatch({
                        type: SET_EMAIL,
                        payload: result.email,
                    });
                    dispatch({
                        type: SET_PHONE_NUMBER,
                        payload: result.phone_number,
                    });
                    dispatch({
                        type: SET_NAME,
                        payload: result.name,
                    });
                } else {
                    dispatch({
                        type: AUTHORIZATION,
                        payload: false,
                    });
                }
            }
        ).catch(result => {
            alert(result);
            dispatch({
                type: AUTHORIZATION,
                payload: false,
            });
        });
    }
}

export function registration(user_info) {
    return dispatch => {
        fetch('http://localhost:8080/registration',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user_info)
        }).then(result => {
                if (result.status == 200) {
                    dispatch({
                        type: AUTHORIZATION,
                        payload: true,
                    });
                    dispatch({
                        type: SET_LOGIN,
                        payload: user_info.login,
                    });
                    dispatch({
                        type: SET_EMAIL,
                        payload: user_info.email,
                    });
                    dispatch({
                        type: SET_PHONE_NUMBER,
                        payload: user_info.phone_number,
                    });
                    dispatch({
                        type: SET_NAME,
                        payload: user_info.name,
                    });
                } else {
                    dispatch({
                        type: AUTHORIZATION,
                        payload: false,
                    });
                }
            }
        ).catch(result => {
            alert(result);
            dispatch({
                type: AUTHORIZATION,
                payload: false,
            });
        });
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
