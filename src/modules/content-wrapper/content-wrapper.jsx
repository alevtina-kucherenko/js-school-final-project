import React from 'react';
import PropTypes from 'prop-types';

import Paper from '@material-ui/core/Paper';

import './content-wrapper.css';

export const ContentWrapper = (props) => {
    return (
        <Paper className="content-wrapper" style={props.style}>
            {props.children}
        </Paper>
    );
};

ContentWrapper.propTypes = {
    children: PropTypes.element.isRequired,
    style: PropTypes.object
};
