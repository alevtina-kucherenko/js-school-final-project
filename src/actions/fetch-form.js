import axios from 'axios';

import {API} from '../constants/api';
import {SET_ACTIVE_FORM, SET_ACTIVE_FORM_LOADING} from '../constants/active-form';

export const fetchForm = formId => {
    return dispatch => {
        dispatch({
            type: SET_ACTIVE_FORM_LOADING,
            payload: true
        });

        axios
            .get(API.FORM_BY_ID(formId))
            .then(response => {
                const activeForm = response.data;

                dispatch({
                    type: SET_ACTIVE_FORM,
                    payload: activeForm
                })
            })
            .catch(error => {
                console.log(error);
            });
    }
};