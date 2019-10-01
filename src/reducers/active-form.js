import {SET_ACTIVE_FORM, SET_ACTIVE_FORM_LOADING, SUBMIT_FORM, RESET_ACTIVE_FROM} from '../constants/active-form';

const initialState = {
    form: null,
    loading: false,
    submitted: false,
    error: false
};

export const activeForm = (state = initialState, action) => {
    switch (action.type) {
        case SET_ACTIVE_FORM_LOADING:
            return {
                ...state,
                loading: action.payload
            };
        case SET_ACTIVE_FORM:
            return {
                ...state,
                form: action.payload,
                loading: false
            };
        case RESET_ACTIVE_FROM:
            return initialState;
        case SUBMIT_FORM.SUCCESSFUL:
            return {
                ...state,
                loading: false,
                submitted: true,
                error: false
            };
        case SUBMIT_FORM.ERROR:
            return {
                ...state,
                loading: false,
                submitted: false,
                error: action.payload
            };
        default:
            return state;
    }
};