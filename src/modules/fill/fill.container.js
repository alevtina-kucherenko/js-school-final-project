import {connect} from 'react-redux';

import {Fill} from './fill.component';
import {submitForm} from '../../actions/submit-form';

const mapDispatchToProps = dispatch => {
    return {
        submitForm: (formValues, formId) => {
            dispatch(submitForm(formValues, formId));
        }
    };
};

const mapStateToProps = state => {
    return {
        form: state.activeForm.form,
        loading: state.activeForm.loading,
        error: state.activeForm.error,
        submitted: state.activeForm.submitted
    };
};

export const FillContainer = connect(mapStateToProps, mapDispatchToProps)(Fill);