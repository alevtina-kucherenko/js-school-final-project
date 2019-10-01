import React from 'react';
import PropTypes from 'prop-types';

import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';


export const CheckMark = props => {
    return (
        <FormControlLabel
            control={
                <Checkbox
                    onChange={props.onChange}
                    color="primary"
                    checked={props.value}
                />
            }
            name={props.name}
            label={props.label}
            style={{margin: 20, width: '29%'}}
            disabled={props.disabled}
        />
    );
};

CheckMark.defaultProps = {
    value: false,
    required: false,
    onChange: () => {}
};

CheckMark.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.bool,
    required: PropTypes.bool
};