export const SET_DEFAULT_CITY = 'SET_DEFAULT_CITY';
export const SET_LANGUAGE = 'SET_LANGUAGE';

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
