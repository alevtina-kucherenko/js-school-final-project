import React from 'react';
import PropTypes from 'prop-types';

import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

export const SwapControls = props => {
    return (
        <div
            style={{
                display: 'inline-flex',
                flexWrap: 'wrap',
                width: '30%',
                justifyContent: 'center',
                position: 'absolute',
                top: '50%',
                transform: 'translate(0%, -50%)'
            }}
        >
            {
                props.renderSwapWithPreviousFieldButton && (
                    <IconButton
                        aria-label="up"
                        onClick={props.onSwapWithPreviousField}
                    >
                        <KeyboardArrowUpIcon/>
                    </IconButton>
                )
            }
            {
                props.renderSwapWithNextField && (
                    <IconButton
                        aria-label="up"
                        onClick={props.onSwapWithNextField}
                    >
                        <KeyboardArrowDownIcon/>
                    </IconButton>
                )
            }
        </div>
    )
};

SwapControls.propTypes = {
    onSwapWithNextField: PropTypes.func.isRequired,
    onSwapWithPreviousField: PropTypes.func.isRequired,
    renderSwapWithNextField: PropTypes.bool.isRequired,
    renderSwapWithPreviousFieldButton: PropTypes.bool.isRequired

};