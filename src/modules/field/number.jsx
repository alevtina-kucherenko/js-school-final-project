import React from 'react';
import PropTypes from 'prop-types';

import {FIELD_TYPES} from '../../constants/fields';

import TextField from '@material-ui/core/TextField';

export const Number = props => {
    return (
        <TextField
            type={FIELD_TYPES.NUMBER}
            name={props.name}
            label={props.label}
            placeholder={props.placeholder}
            onChange={props.onChange}
            style={{margin: 20}}
            InputLabelProps={{
                shrink: true,
            }}
            value={props.value}
            disabled={props.disabled}
            required={props.required}
        />
    );
};

Number.defaultProps = {
    value: '',
    required: false,
    onChange: () => {}
};

Number.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    required: PropTypes.bool
};