import {
    Text,
    Number,
    CheckMark,
    DropDown
} from '../modules/field';

import {
    TextConstructor,
    NumberConstructor,
    CheckMarkConstructor,
    DropDownConstructor
} from '../modules/field-constructor';

export const FIELD_TYPES = {
    TEXT: 'text',
    NUMBER: 'number',
    CHECKMARK: 'checkmark',
    DROPDOWN: 'dropdown',
    CHECKBOX: 'checkbox'
};

const defaultText = {
    type: FIELD_TYPES.TEXT,
    name: 'name',
    label: 'label',
    placeholder: 'placeholder'
};

const defaultCheckMark = {
    type: FIELD_TYPES.CHECKMARK,
    name: 'name',
    label: 'Label'
};

const defaultNumber = {
    type: FIELD_TYPES.NUMBER,
    name: 'name',
    label: 'label',
    placeholder: 'placeholder'
};

const defaultDropDown = {
    type: FIELD_TYPES.DROPDOWN,
    name: 'name',
    label: 'label',
    items: [
        {
            name: '',
            value: ''
        }
    ],
    default: 0
};

export const fieldPropsMap = {
    [FIELD_TYPES.TEXT]: defaultText,
    [FIELD_TYPES.NUMBER]: defaultNumber,
    [FIELD_TYPES.CHECKMARK]: defaultCheckMark,
    [FIELD_TYPES.DROPDOWN]: defaultDropDown
};

export const fieldMap = {
    [FIELD_TYPES.TEXT]: Text,
    [FIELD_TYPES.NUMBER]: Number,
    [FIELD_TYPES.CHECKMARK]: CheckMark,
    [FIELD_TYPES.DROPDOWN]: DropDown
};

export const fieldConstructorMap = {
    [FIELD_TYPES.TEXT]: TextConstructor,
    [FIELD_TYPES.NUMBER]: NumberConstructor,
    [FIELD_TYPES.CHECKMARK]: CheckMarkConstructor,
    [FIELD_TYPES.DROPDOWN]: DropDownConstructor
};