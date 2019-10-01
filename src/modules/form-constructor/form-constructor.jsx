import React from 'react';
import PropTypes from 'prop-types';

import {
    fieldMap,
    fieldPropsMap,
    fieldConstructorMap
} from '../../constants/fields';

import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import {Controls} from './controls';
import {SwapControls} from './swap-controls';
import {FieldWrapper} from './field-wrapper';
import {AddFieldsButtons} from './add-fields-buttons';

export class FormConstructor extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: props.name ? props.name : '',
            fields: props.fields ? this.prepareFieldsData(props.fields) : []
        }
    }

    prepareFieldsData = fields => {
        return fields.map(field => ({
            data: field,
            editable: true,
            error: false
        }))
    };

    onChangeFormName = event => {
        this.setState({
            name: event.target.value
        })
    };

    addField = event => {
        let fields = [].concat(this.state.fields);
        fields.push({
            data: fieldPropsMap[event.currentTarget.name],
            editable: true
        });
        this.setState({fields});
    };

    onSave = (fieldState, index) => {
        let fields = [].concat(this.state.fields);

        fields[index] = {
            data: fieldState,
            editable: false
        };

        this.setState({fields});
    };

    onDelete = index => {
        let fields = [].concat(this.state.fields);
        fields.splice(index, 1);
        this.setState({fields});
    };

    onEdit = index => {
        let fields = [].concat(this.state.fields);
        fields[index] = {
            ...fields[index],
            editable: true
        };
        this.setState({fields});
    };

    saveForm = () => {
        const areSomeFieldsEditable = this.state.fields.some(field => field.editable);

        if (areSomeFieldsEditable) {
            const newFields = this.state.fields.map(field => {
                if(field.editable) {
                    return {
                        ...field,
                        error: 'The field should be saved before form saving!'
                    };
                } else {
                    return field;
                }
            });

            this.setState({fields: newFields});
        } else {
            const form = {
                name: this.state.name,
                fields: this.state.fields.map(field => {
                    return field.data;
                })
            };

            if (typeof this.props.formId !== 'undefined') {
                this.props.updateForm(form, this.props.formId);
            } else {
                this.props.createForm(form);
            }

        }
    };

    swapWithPreviousField = index => {
        const fields = [ ...this.state.fields];

        let temp = fields[index];
        fields[index] = fields[index - 1];
        fields[index - 1] = temp;

        this.setState({fields})
    };

    swapWithNextField = index => {
        // let fields = [].concat(this.state.fields);
        const fields = [ ...this.state.fields];

        let temp = fields[index];
        fields[index] = fields[index + 1];
        fields[index + 1] = temp;

        this.setState({fields})
    };

    renderFields() {
        return this.state.fields.map((field, index) => {
            const FieldComponent = fieldMap[field.data.type];
            const FieldConstructorComponent = fieldConstructorMap[field.data.type];

            const renderSwapWithPreviousFieldButton = !!this.state.fields[index - 1];
            const renderSwapWithNextField = !!this.state.fields[index + 1];
            const swapWithPreviousField = () => this.swapWithPreviousField(index);
            const swapWithNextField = () => this.swapWithNextField(index);

            if (field.editable) {
                return (
                    <FieldWrapper key={index} error={!!field.error}>
                        <FieldConstructorComponent
                            index={index}
                            data={field.data}
                            onSave={this.onSave}
                            onDelete={this.onDelete}
                            error={field.error}
                        />
                        <SwapControls
                            renderSwapWithPreviousFieldButton={renderSwapWithPreviousFieldButton}
                            renderSwapWithNextField={renderSwapWithNextField}
                            onSwapWithPreviousField={swapWithPreviousField}
                            onSwapWithNextField={swapWithNextField}
                        />
                        <div>{field.error}</div>
                    </FieldWrapper>
                );
            } else {
                return (
                    <FieldWrapper key={index}>
                        <FieldComponent {...field.data} onChange={() => {
                        }}/>
                        <SwapControls
                            renderSwapWithPreviousFieldButton={renderSwapWithPreviousFieldButton}
                            renderSwapWithNextField={renderSwapWithNextField}
                            onSwapWithPreviousField={swapWithPreviousField}
                            onSwapWithNextField={swapWithNextField}
                        />
                        <div>
                            <Button
                                variant="outlined"
                                color="primary"
                                onClick={() => this.onEdit(index)}
                                style={{margin: 10}}
                            >
                                Edit
                            </Button>
                            <Button
                                variant="outlined"
                                color="secondary"
                                style={{margin: 10}}
                                onClick={() => this.onDelete(index)}
                            >
                                Delete
                            </Button>
                        </div>
                    </FieldWrapper>
                );
            }
        });
    }

    render() {
        return (
            <div>
                <Paper style={{marginBottom: 20}}>
                    <TextField
                        error={false}
                        label="Enter Form Name"
                        style={{margin: 20}}
                        value={this.state.name}
                        onChange={this.onChangeFormName}
                    />
                </Paper>
                {this.renderFields()}
                {
                    this.state.fields.length < 15
                        ? (
                            <AddFieldsButtons onAddField={this.addField}/>
                        ) : (
                            'The number of fields is limited'
                        )
                }
                <Controls onSaveForm={this.saveForm}/>
            </div>
        );
    }
}

FormConstructor.propTypes = {
    updateForm: PropTypes.func,
    createForm: PropTypes.func,
    fields: PropTypes.arrayOf(PropTypes.object),
    formId: PropTypes.number,
    name: PropTypes.string
};