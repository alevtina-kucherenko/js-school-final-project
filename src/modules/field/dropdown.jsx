import React from 'react';
import PropTypes from 'prop-types';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';


export const DropDown = props => {
    return (
        <FormControl style={{margin: 20, width: '29%'}}>
            <InputLabel>
                {props.label}
            </InputLabel>
            <Select
                value={props.value}
                name={props.name}
                disabled={props.disabled}
                onChange={props.onChange}
                required={props.required}
            >
                {props.items.map((item, index) => (
                    <MenuItem
                        key={index}
                        value={item.value}
                    >
                        {item.name}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

DropDown.defaultProps = {
    value: '',
    items: [],
    default: 0,
    required: false,
    onChange: () => {}
};

DropDown.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
    default: PropTypes.number,
    items: PropTypes.arrayOf(PropTypes.object),
    required: PropTypes.bool
};