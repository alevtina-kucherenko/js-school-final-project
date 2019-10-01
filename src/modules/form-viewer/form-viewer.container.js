import {connect} from 'react-redux';

import {FormViewer} from './form-viewer.component';

const mapStateToProps = state => {
    return {
        form: state.activeForm.form
    };
};

export const FormViewerContainer = connect(mapStateToProps)(FormViewer);