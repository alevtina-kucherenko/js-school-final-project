import axios from 'axios';

import {API} from '../constants/api';
import {SET_FILLS_BY_FORM_ID} from '../constants/fills';

export const fetchFillsByFormId = formId => {
    return dispatch => {
        axios
            .get(API.FILL_BY_ID(formId))
            .then(response => {
                const formFillsArray = response.data;

                const formFillsObject = formFillsArray.reduce((accumulator, user) => {
                    const userId = user.id;

                    accumulator[userId] = user;

                    return accumulator;
                }, {});

                dispatch({
                    type: SET_FILLS_BY_FORM_ID,
                    payload: {
                        formId: formId,
                        formFills: formFillsObject
                    }
                })
            });
    };
};
