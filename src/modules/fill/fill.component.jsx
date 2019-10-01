import React from 'react';
import PropTypes from 'prop-types';

import {FIELD_TYPES, fieldMap} from '../../constants/fields';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import AppBar from '@material-ui/core/AppBar/AppBar';
import CircularProgress from '@material-ui/core/CircularProgress'

export class Fill extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.getDefaultFieldsValues(props.form.fields);
    }

    getDefaultFieldsValues(fields) {
        return fields.reduce((accumulator, field) => {
            if (field.type === FIELD_TYPES.DROPDOWN) {
                accumulator[field.name] = field.items[0].value;
            } else {
                accumulator[field.name] = undefined;
            }
            return accumulator;
        }, {});
    }

    onChangeHandler = event => {
        let value;

        if (event.target.type === FIELD_TYPES.CHECKBOX) {
            value = event.target.checked;
        } else if (event.target.type === FIELD_TYPES.NUMBER) {
            value = Number(event.target.value);
        } else {
            value = event.target.value;
        }

        this.setState({[event.target.name]: value});
    };

    onFormSubmit = event => {
        event.preventDefault();
        this.props.submitForm({fields: this.state}, this.props.form.id);
    };

    renderForm() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <Paper style={{marginBottom: 20}}>
                    <TextField
                        style={{margin: 20}}
                        value={this.props.form.name}
                        label="Form"
                        disabled={true}
                    />
                </Paper>
                {this.props.form.fields.map((field, index) => {
                    const FieldComponent = fieldMap[field.type];
                    const filedValue = this.state[field.name];

                    return (
                        <Paper key={index} style={{marginBottom: 20}}>
                            <FieldComponent
                                key={index}
                                {...field}
                                value={filedValue}
                                onChange={this.onChangeHandler}
                                disabled={false}
                                required={true}
                            />
                        </Paper>
                    );
                })}
                <AppBar
                    position="fixed"
                    color="default"
                    style={{
                        top: "auto",
                        bottom: 0
                    }}
                >
                    <Grid
                        container
                        justify="space-evenly"
                    >
                        <Button
                            type="submit"
                            variant="contained"
                            size="large"
                            color="primary"
                            style={{margin: 17}}
                        >
                            Submit
                        </Button>
                    </Grid>
                </AppBar>
            </form>
        );
    }


    render() {
        if (this.props.loading) {
            return <CircularProgress/>;
        }

        if (this.props.submitted) {
            return <div>Form submitted successfully!</div>;
        }

        return (
            <div>
                {this.props.error && <div>{this.props.error}</div>}
                {this.renderForm()}
            </div>
        );
    }
}

Fill.propTypes = {
    loading: PropTypes.bool.isRequired,
    error: PropTypes.bool.isRequired,
    submitted: PropTypes.bool.isRequired,
    submitForm: PropTypes.func.isRequired,
    form: PropTypes.object.isRequired
};