import React from 'react';
import PropTypes from 'prop-types';

import Paper from '@material-ui/core/Paper';
import {red} from '@material-ui/core/colors';
import TextField from '@material-ui/core/TextField';

import {fieldMap} from '../../constants/fields';
import {withFills} from '../../providers/fills-provider';

export const FormViewerComponent = props => {
    const user = props.users[props.userId];

    if (!user) {
        return <div style={{ color: red }}>There is not values for current user and for current form</div>;
    }

    return (
        <div>
            <Paper style={{marginBottom: 20}}>
                <TextField
                    style={{margin: 20}}
                    value={props.form.name}
                    disabled={true}
                />
            </Paper>
            {props.form.fields.map((field, index) => {
                const FieldComponent = fieldMap[field.type];
                const userValues = user.fields;
                const filedValue = userValues[field.name];

                return (
                    <Paper key={index} style={{marginBottom: 20}}>
                        <FieldComponent
                            key={index}
                            {...field}
                            value={filedValue}
                            disabled={true}
                        />
                    </Paper>
                );
            })}
        </div>
    );
};

export const FormViewer = withFills(FormViewerComponent);

FormViewerComponent.propTypes = {
    users: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,
    userId: PropTypes.string.isRequired
};