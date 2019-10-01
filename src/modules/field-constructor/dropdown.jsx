import React from 'react';
import PropTypes from 'prop-types';

import {DropDown} from '../field';

import {Paper} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';


export class DropDownConstructor extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            settings: {
                ...props.data,
                items: props.data.items ? props.data.items : []
            },
            value: ''
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

    onChangeItemHandler = (event, index) => {
        let newItems = [].concat(this.state.settings.items);
        newItems[index][event.target.name] = event.target.value;
        this.setState({
            settings: {
                ...this.state.settings,
                items: newItems
            }
        });
    };

    onRemoveItemHandler = index => {
        let newItems = [].concat(this.state.settings.items);
        newItems.splice(index, 1);
        this.setState({
            settings: {
                ...this.state.settings,
                items: newItems
            }
        });
    };

    onAddItemHandler = () => {
        let newItems = [].concat(this.state.settings.items);
        newItems.push({
            name: '',
            value: ''
        });
        this.setState({
            settings: {
                ...this.state.settings,
                items: newItems
            }
        });
    };

    onChange = event => {
        this.setState({value: event.target.value});
    };

    renderItems() {
        return this.state.settings.items.map((item, index) => (
            <Paper
                key={index}
                style={{
                    margin: 10,
                    padding: '15px',
                    border: '1px solid #ccc0c0',
                    borderRadius: '8px',
                    boxShadow: 'none',
                    backgroundColor: 'transparent'
                }}
            >
                <Typography variant="body1" gutterBottom>
                    Item {index}:
                </Typography>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <TextField
                        name="name"
                        label="Name"
                        value={item.name}
                        onChange={event => this.onChangeItemHandler(event, index)}
                        style={{margin: 8}}
                    />
                    <TextField
                        name="value"
                        label="Value"
                        value={item.value}
                        onChange={event => this.onChangeItemHandler(event, index)}
                        style={{margin: 8}}
                    />
                    {
                        this.state.settings.items.length > 1 && (
                            <Button variant="outlined" color="secondary"
                                    onClick={() => this.onRemoveItemHandler(index)}>
                                Remove Item
                            </Button>
                        )
                    }
                </div>
            </Paper>
        ));
    }

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
                    <DropDown {...this.state.settings} value={this.state.value} onChange={this.onChange}/>
                    <div style={{margin: 10}}>
                        <TextField
                            name="name"
                            label="Name"
                            value={this.state.settings.name}
                            onChange={this.onChangeHandler}
                            style={{margin: 10}}
                        />
                        <TextField
                            name="label"
                            label="Label"
                            value={this.state.settings.label}
                            onChange={this.onChangeHandler}
                            style={{margin: 10}}
                        />
                        <ul>
                            {this.renderItems()}
                            <Button
                                variant="outlined"
                                color="primary"
                                onClick={this.onAddItemHandler}
                                style={{margin: 10}}
                            >
                                AddItem
                            </Button>
                        </ul>
                    </div>
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

DropDownConstructor.propTypes = {
    data: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    onSave: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
};