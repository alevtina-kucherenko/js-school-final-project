import {connect} from 'react-redux';

import {FormProvider} from './form-provider.component';

import {fetchForm} from '../../actions/fetch-form';
import {resetActiveForm} from '../../actions/reset-active-from';

const mapDispatchToProps = dispatch => {
    return {
        fetchForm: formId => {
            dispatch(fetchForm(formId));
        },
        resetActiveForm: () => {
            dispatch(resetActiveForm());
        }
    };
};

const mapStateToProps = state => {
    return {
        form: state.activeForm.form,
        loading: state.activeForm.loading
    };
};

export const FormProviderContainer = connect(mapStateToProps, mapDispatchToProps)(FormProvider);