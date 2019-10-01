import React from 'react';
import {Link} from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import AppBar from '@material-ui/core/AppBar/AppBar';

export const NavigationBar = () => {
    return (
        <AppBar
            position="fixed"
            color="default"
            style={{
                top: 0
            }}
        >
            <Grid
                container
                justify="space-around"
                style={{
                    margin: 15
                }}
            >
                <Link
                    to="/"
                    style={{
                        textDecoration: "none"
                    }}
                >
                    <Button
                        variant="contained"
                        color="primary"
                    >
                        <MenuIcon
                            style={{
                                margin: 4
                            }}
                        />
                        Form List
                    </Button>
                </Link>
                <Link
                    to="/create/"
                    style={{
                        textDecoration: "none"
                    }}
                >
                    <Button
                        variant="contained"
                        color="primary"
                    >
                        <AddIcon
                            style={{
                                margin: 4
                            }}
                        />
                        Create New Form
                    </Button>
                </Link>
            </Grid>
        </AppBar>
    );
};
