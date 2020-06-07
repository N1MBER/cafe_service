import {AppStyle} from '../values/app_style';

const initialState ={
  style: AppStyle
};

export function style_reducer(state = initialState, action) {
    return {...state, style: AppStyle};
}
