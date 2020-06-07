export const SET_PAGE_TITTLE = 'SET_PAGE_TITTLE';
export const SET_PAGE = 'SET_PAGE';

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
