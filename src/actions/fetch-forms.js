import axios from 'axios';

import {API} from '../constants/api';
import {SET_FORMS_LIST} from '../constants/forms';

export const fetchForms = () => {
    return dispatch => {
        axios
            .get(API.FORMS_LIST)
            .then(response => {
                const forms = response.data;

                dispatch({
                    type: SET_FORMS_LIST,
                    payload: forms
                });
            })
            .catch(error => {
                console.log(error);
            });
    }
};
