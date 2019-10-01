import React from 'react';
import PropTypes from 'prop-types';

import Paper from '@material-ui/core/Paper';


export const FieldWrapper = props => {
    const backgroundColor = props.error ? '#ffbdaa' : '#fff';

    return (
        <Paper style={{marginBottom: 20, backgroundColor, position: 'relative'}}>
            {props.children}
        </Paper>
    );
};

FieldWrapper.propTypes = {
    error: PropTypes.bool,
    children: PropTypes.arrayOf(PropTypes.object).isRequired
};