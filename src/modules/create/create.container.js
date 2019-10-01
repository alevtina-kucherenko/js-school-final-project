import {connect} from 'react-redux';

import {FormConstructor} from '../form-constructor';
import {createForm} from '../../actions/create-form';

const mapDispatchToProps = dispatch => {
    return {
        createForm: form => {
            dispatch(createForm(form));
        }
    };
};

export const CreateContainer = connect(null, mapDispatchToProps)(FormConstructor);