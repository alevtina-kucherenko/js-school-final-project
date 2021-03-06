import React from 'react';
import PropTypes from 'prop-types';

import {CheckMark} from '../field';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';


export class CheckMarkConstructor extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            settings: props.data,
            value: false
        };
    }

    onChangeHandler = event => {
        this.setState({
            settings: {
                ...this.state.settings,
                [event.target.name]: event.target.value
            }
        });
    };

    onChange = event => {
        this.setState({value: event.target.checked});
    };

    render() {
        return (
            <React.Fragment>
                <FormControl
                    style={{
                        display: 'inline-flex',
                        flexWrap: 'wrap',
                        width: '70%'
                    }}
                >
                    <CheckMark {...this.state.settings} value={this.state.value} onChange={this.onChange}/>
                    <TextField
                        name="name"
                        label="Name"
                        value={this.state.settings.name}
                        style={{margin: 20}}
                        onChange={this.onChangeHandler}
                    />
                    <TextField
                        name="label"
                        label="Label"
                        value={this.state.settings.label}
                        style={{margin: 20}}
                        onChange={this.onChangeHandler}
                    />
                    <div>
                        <Button
                            variant="outlined"
                            color="primary"
                            style={{margin: 10}}
                            onClick={() => this.props.onSave(this.state.settings, this.props.index)}
                        >
                            Save
                        </Button>
                        <Button
                            variant="outlined"
                            color="secondary"
                            style={{margin: 10}}
                            onClick={() => this.props.onDelete(this.props.index)}
                        >
                            Delete
                        </Button>
                    </div>
                </FormControl>
            </React.Fragment>
        );
    }
}

CheckMarkConstructor.propTypes = {
    data: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    onSave: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
};