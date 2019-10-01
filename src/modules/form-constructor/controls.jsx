import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import CloseIcon from '@material-ui/icons/Close';
import SaveAltIcon from '@material-ui/icons/SaveAlt';

export const Controls = props => {
    return (
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
                <Fab
                    onClick={props.onSaveForm}
                    color="primary"
                    aria-label="save"
                    style={{margin: 10}}
                >
                    <SaveAltIcon/>
                </Fab>
                <Link to="/">
                    <Fab
                        color="primary"
                        aria-label="cancel"
                        style={{margin: 10}}
                    >
                        <CloseIcon/>
                    </Fab>
                </Link>
            </Grid>
        </AppBar>
    );
};

Controls.propTypes = {
    onSaveForm: PropTypes.func.isRequired
};