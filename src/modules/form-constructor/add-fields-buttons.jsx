import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import {FIELD_TYPES} from '../../constants/fields';


export const AddFieldsButtons = props => {
    return (
        <Grid item>
            <ButtonGroup
                variant="contained"
                color="primary"
                size="large"
                aria-label="large contained secondary button group"
            >
                <Button name={FIELD_TYPES.TEXT} onClick={props.onAddField}>add text</Button>
                <Button name={FIELD_TYPES.NUMBER} onClick={props.onAddField}>add number</Button>
                <Button name={FIELD_TYPES.DROPDOWN} onClick={props.onAddField}>add dropdown</Button>
                <Button name={FIELD_TYPES.CHECKMARK} onClick={props.onAddField}>add checkmark</Button>
            </ButtonGroup>
        </Grid>
    );
};

AddFieldsButtons.propTypes = {
    onAddField: PropTypes.func.isRequired
};