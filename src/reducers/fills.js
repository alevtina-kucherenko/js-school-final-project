import {SET_FILLS_BY_FORM_ID} from '../constants/fills';

const initialState = {};

export const fills = (state = initialState, action) => {
    switch (action.type) {
        case SET_FILLS_BY_FORM_ID:
            return {
                ...state,
                [action.payload.formId]: action.payload.formFills
            };
        default:
            return state;
    }
};