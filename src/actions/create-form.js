import axios from 'axios';

import {API} from '../constants/api';
import {history} from '../utils/history';
import {CREATE_FORM} from '../constants/forms';
import {SET_ACTIVE_FORM_LOADING} from '../constants/active-form';

export const createForm = form => {
    return dispatch => {
        dispatch({
            type: SET_ACTIVE_FORM_LOADING,
            payload: true
        });

        axios
            .post(API.NEW_FORM, form)
            .then(response => {
                dispatch({
                    type: SET_ACTIVE_FORM_LOADING,
                    payload: false
                });

                dispatch({
                    type: CREATE_FORM,
                    payload: {
                        id: response.data.id,
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