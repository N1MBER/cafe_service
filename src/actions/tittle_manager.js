import ReservationPage from '../containers/ReservationPage';
import {app_values} from '../store/values/app_values';
import LoginPage from '../containers/LoginPage';
import MenuPage from '../containers/MenuPage';
import SettingsPage from '../containers/SettingsPage';
import StartPage from '../containers/StartPage';

export const SET_PAGE_TITTLE = 'SET_PAGE_TITTLE';
export const SET_PAGE = 'SET_PAGE';
export const SET_PREVIOUS_PAGE = 'SET_PREVIOUS_PAGE';
export const SET_LANGUAGE = 'SET_LANGUAGE';


export function set_page_tittle(tittle) {
    return{
        type: SET_PAGE_TITTLE,
        payload: tittle
    }
}

export function set_page(page) {
    return{
        type: SET_PAGE,
        payload: page
    }
}

export function set_previous_page(page) {
    return{
        type: SET_PREVIOUS_PAGE,
        payload: page
    }
}

export function set_page_lang(language) {
    return{
        type: SET_LANGUAGE,
        payload: language
    }
}

export function get_title(page){
    switch (page) {
        case ReservationPage:
            return app_values.header.tittle.reservation;
        case LoginPage:
            return app_values.header.tittle.login;
        case MenuPage:
            return app_values.header.tittle.menu;
        case SettingsPage:
            return app_values.header.tittle.settings;
        case StartPage:
            return app_values.header.tittle.cafe;
        default:

    }

}
