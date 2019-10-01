import {connect} from 'react-redux';

import {FormConstructor} from '../form-constructor';
import {updateForm} from '../../actions/update-form';

const mapDispatchToProps = dispatch => {
    return {
        updateForm: (form, formId) => {
            dispatch(updateForm(form, formId));
        }
    };
};

const mapStateToProps = state => {
    return {
        formId: state.activeForm.form.id,
        name: state.activeForm.form.name,
        fields: state.activeForm.form.fields,
    };
};

export const EditContainer = connect(mapStateToProps, mapDispatchToProps)(FormConstructor);