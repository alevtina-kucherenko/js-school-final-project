import axios from 'axios';

import {API} from '../constants/api';
import {SET_ACTIVE_FORM_LOADING, SUBMIT_FORM} from '../constants/active-form';

export const submitForm = (formValues, formId) => {
    return dispatch => {
        dispatch({
            type: SET_ACTIVE_FORM_LOADING,
            payload: true
        });

        axios
            .post(API.FILL_BY_ID(formId), formValues)
            .then(() => {
                dispatch({
                    type: SUBMIT_FORM.SUCCESSFUL
                })
            })
            .catch(error => {
                dispatch({
                    type: SUBMIT_FORM.ERROR,
                    payload: error.message
                })
            });
    }
};