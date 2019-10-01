import {connect} from 'react-redux';

import {FormsList} from './forms.component';
import {fetchForms} from "../../actions/fetch-forms";

const mapDispatchToProps = dispatch => {
    return {
        fetchForms: () => {
            dispatch(fetchForms());
        }
    };
};

const mapStateToProps = state => {
    return {
        formsList: state.forms.list,
        isFormListLoaded: state.forms.isFormListLoaded
    };
};

export const FormsContainer = connect(mapStateToProps, mapDispatchToProps)(FormsList);