import axios from 'axios';

import {API} from '../constants/api';
import {history} from '../utils/history';
import {UPDATE_FORM} from '../constants/forms';
import {SET_ACTIVE_FORM_LOADING} from '../constants/active-form';

export const updateForm = (form, formId) => {
    return dispatch => {
        dispatch({
            type: SET_ACTIVE_FORM_LOADING,
            payload: true
        });

        axios
            .put(API.FORM_BY_ID(formId), form)
            .then(() => {
                dispatch({
                    type: SET_ACTIVE_FORM_LOADING,
                    payload: false
                });

                dispatch({
                    type: UPDATE_FORM,
                    payload: {
                        id: formId,
                        name: form.name,
                        fields: form.fields.length
                    }
                });

                history.push('/');
            })
            .catch(error => {
                console.log(error);
            });
    }
};