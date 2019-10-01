import {SET_FORMS_LIST, CREATE_FORM, UPDATE_FORM} from '../constants/forms';

const initialState = {
    list: [],
    isFormListLoaded: false
};

export const forms = (state = initialState, action) => {
    switch (action.type) {
        case SET_FORMS_LIST:
            return {
                list: action.payload,
                isFormListLoaded: true
            };
        case CREATE_FORM:
            return {
                ...state,
                list: [
                    ...state.list,
                    action.payload
                ]
            };
        case UPDATE_FORM:
            return {
                ...state,
                list: state.list.map(item => {
                    if (item.id === action.payload.id) {
                        return action.payload;
                    } else {
                        return item;
                    }
                })
            };
        default:
            return state;
    }
};
