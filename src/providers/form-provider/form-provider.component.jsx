import React from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';

export class FormProvider extends React.Component {
    componentDidMount() {
        if (!this.props.form) {
            this.props.fetchForm(this.props.formId);
        }
    }

    componentWillUnmount() {
        this.props.resetActiveForm();
    }

    render() {
        if (this.props.loading || !this.props.form) {
            return <CircularProgress style={{ display: 'block', margin: 'auto'}}/>;
        } else {
            return this.props.children;
        }
    }
}